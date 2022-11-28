var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var BulkexportsV1ExportJob = /** @class */ (function (_super) {
    __extends(BulkexportsV1ExportJob, _super);
    function BulkexportsV1ExportJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", Object)
    ], BulkexportsV1ExportJob.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], BulkexportsV1ExportJob.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_day" }),
        __metadata("design:type", String)
    ], BulkexportsV1ExportJob.prototype, "endDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=estimated_completion_time" }),
        __metadata("design:type", String)
    ], BulkexportsV1ExportJob.prototype, "estimatedCompletionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], BulkexportsV1ExportJob.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=job_queue_position" }),
        __metadata("design:type", String)
    ], BulkexportsV1ExportJob.prototype, "jobQueuePosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=job_sid" }),
        __metadata("design:type", String)
    ], BulkexportsV1ExportJob.prototype, "jobSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], BulkexportsV1ExportJob.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_day" }),
        __metadata("design:type", String)
    ], BulkexportsV1ExportJob.prototype, "startDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], BulkexportsV1ExportJob.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhook_method" }),
        __metadata("design:type", String)
    ], BulkexportsV1ExportJob.prototype, "webhookMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhook_url" }),
        __metadata("design:type", String)
    ], BulkexportsV1ExportJob.prototype, "webhookUrl", void 0);
    return BulkexportsV1ExportJob;
}(SpeakeasyBase));
export { BulkexportsV1ExportJob };
