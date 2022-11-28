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
// JobInfoJobInfoErrors
/**
 * The job infos' errors
**/
var JobInfoJobInfoErrors = /** @class */ (function (_super) {
    __extends(JobInfoJobInfoErrors, _super);
    function JobInfoJobInfoErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Error" }),
        __metadata("design:type", Array)
    ], JobInfoJobInfoErrors.prototype, "error", void 0);
    return JobInfoJobInfoErrors;
}(SpeakeasyBase));
export { JobInfoJobInfoErrors };
export var JobInfoJobInfoJobStatusEnum;
(function (JobInfoJobInfoJobStatusEnum) {
    JobInfoJobInfoJobStatusEnum["New"] = "New";
    JobInfoJobInfoJobStatusEnum["Pending"] = "Pending";
    JobInfoJobInfoJobStatusEnum["InProgress"] = "InProgress";
    JobInfoJobInfoJobStatusEnum["Success"] = "Success";
    JobInfoJobInfoJobStatusEnum["Failed"] = "Failed";
    JobInfoJobInfoJobStatusEnum["OnHold"] = "OnHold";
})(JobInfoJobInfoJobStatusEnum || (JobInfoJobInfoJobStatusEnum = {}));
var JobInfoJobInfo = /** @class */ (function (_super) {
    __extends(JobInfoJobInfo, _super);
    function JobInfoJobInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Created" }),
        __metadata("design:type", Date)
    ], JobInfoJobInfo.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployerKey" }),
        __metadata("design:type", String)
    ], JobInfoJobInfo.prototype, "employerKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Errors" }),
        __metadata("design:type", JobInfoJobInfoErrors)
    ], JobInfoJobInfo.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HoldingDate" }),
        __metadata("design:type", Date)
    ], JobInfoJobInfo.prototype, "holdingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobId" }),
        __metadata("design:type", String)
    ], JobInfoJobInfo.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobStatus" }),
        __metadata("design:type", String)
    ], JobInfoJobInfo.prototype, "jobStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobType" }),
        __metadata("design:type", String)
    ], JobInfoJobInfo.prototype, "jobType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdated" }),
        __metadata("design:type", Date)
    ], JobInfoJobInfo.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Progress" }),
        __metadata("design:type", Number)
    ], JobInfoJobInfo.prototype, "progress", void 0);
    return JobInfoJobInfo;
}(SpeakeasyBase));
export { JobInfoJobInfo };
var JobInfo = /** @class */ (function (_super) {
    __extends(JobInfo, _super);
    function JobInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobInfo" }),
        __metadata("design:type", JobInfoJobInfo)
    ], JobInfo.prototype, "jobInfo", void 0);
    return JobInfo;
}(SpeakeasyBase));
export { JobInfo };
