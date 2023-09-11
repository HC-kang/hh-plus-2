"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleHealthIndicator = void 0;
const common_1 = require("@nestjs/common");
const terminus_1 = require("@nestjs/terminus");
let SampleHealthIndicator = class SampleHealthIndicator extends terminus_1.HealthIndicator {
    constructor() {
        super(...arguments);
        this.nodes = [
            { name: 'sample1', type: 'good' },
            { name: 'sample2', type: 'good' },
            { name: 'sample3', type: 'good' },
        ];
    }
    async isHealthy(key) {
        const badSamples = this.nodes.filter((sample) => sample.type === 'bad');
        const isHealthy = badSamples.length === 0;
        const result = this.getStatus(key, isHealthy, {
            badSamples: badSamples.length,
        });
        if (isHealthy) {
            return result;
        }
        throw new terminus_1.HealthCheckError('Sample Check failed', result);
    }
};
SampleHealthIndicator = __decorate([
    (0, common_1.Injectable)()
], SampleHealthIndicator);
exports.SampleHealthIndicator = SampleHealthIndicator;
//# sourceMappingURL=sample.indicator.js.map