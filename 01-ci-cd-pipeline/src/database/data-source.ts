import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import databaseConfig from '@/config/database.config';

config({ path: '.env.development' });

const dbConfig = databaseConfig() as any;
export default new DataSource(dbConfig);
