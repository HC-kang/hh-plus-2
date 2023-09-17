import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// RDS Postgres SSL 설정때문에 추가
const isProduction =
  process.env.NODE_ENV === 'production' ||
  process.env.GITHUB_ACTIONS === 'true';

export default (): TypeOrmModuleOptions => ({
  type: process.env.DATABASE_CONNECTION as any,
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../database/**migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  extra: isProduction
    ? {
        ssl: { rejectUnauthorized: false },
      }
    : undefined,
});
