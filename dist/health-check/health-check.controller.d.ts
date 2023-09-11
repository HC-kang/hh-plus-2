import { HealthCheckService, HttpHealthIndicator, TypeOrmHealthIndicator } from '@nestjs/terminus';
import { SampleHealthIndicator } from './indicators/sample.indicator';
export declare class HealthCheckController {
    private readonly health;
    private readonly http;
    private readonly db;
    private readonly sampleHealthIndicator;
    constructor(health: HealthCheckService, http: HttpHealthIndicator, db: TypeOrmHealthIndicator, sampleHealthIndicator: SampleHealthIndicator);
    check(): Promise<import("@nestjs/terminus").HealthCheckResult>;
}
