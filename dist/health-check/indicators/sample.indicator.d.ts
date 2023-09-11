import { HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';
export interface Sample {
    name: string;
    type: string;
}
export declare class SampleHealthIndicator extends HealthIndicator {
    private nodes;
    isHealthy(key: string): Promise<HealthIndicatorResult>;
}
