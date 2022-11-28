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
import { Meta40 } from "./meta40";
import { Meta41 } from "./meta41";
import { Meta37 } from "./meta37";
import { Meta39 } from "./meta39";
import { Meta38 } from "./meta38";
var ReportScheduleRestApiGet = /** @class */ (function (_super) {
    __extends(ReportScheduleRestApiGet, _super);
    function ReportScheduleRestApiGet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], ReportScheduleRestApiGet.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chart" }),
        __metadata("design:type", Meta40)
    ], ReportScheduleRestApiGet.prototype, "chart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=context_markdown" }),
        __metadata("design:type", String)
    ], ReportScheduleRestApiGet.prototype, "contextMarkdown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creation_method" }),
        __metadata("design:type", String)
    ], ReportScheduleRestApiGet.prototype, "creationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crontab" }),
        __metadata("design:type", String)
    ], ReportScheduleRestApiGet.prototype, "crontab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dashboard" }),
        __metadata("design:type", Meta41)
    ], ReportScheduleRestApiGet.prototype, "dashboard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database" }),
        __metadata("design:type", Meta37)
    ], ReportScheduleRestApiGet.prototype, "database", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReportScheduleRestApiGet.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grace_period" }),
        __metadata("design:type", Number)
    ], ReportScheduleRestApiGet.prototype, "gracePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ReportScheduleRestApiGet.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_eval_dttm" }),
        __metadata("design:type", Date)
    ], ReportScheduleRestApiGet.prototype, "lastEvalDttm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_state" }),
        __metadata("design:type", String)
    ], ReportScheduleRestApiGet.prototype, "lastState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_value" }),
        __metadata("design:type", Number)
    ], ReportScheduleRestApiGet.prototype, "lastValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_value_row_json" }),
        __metadata("design:type", String)
    ], ReportScheduleRestApiGet.prototype, "lastValueRowJson", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=log_retention" }),
        __metadata("design:type", Number)
    ], ReportScheduleRestApiGet.prototype, "logRetention", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReportScheduleRestApiGet.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owners" }),
        __metadata("design:type", Meta39)
    ], ReportScheduleRestApiGet.prototype, "owners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipients" }),
        __metadata("design:type", Meta38)
    ], ReportScheduleRestApiGet.prototype, "recipients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_format" }),
        __metadata("design:type", String)
    ], ReportScheduleRestApiGet.prototype, "reportFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sql" }),
        __metadata("design:type", String)
    ], ReportScheduleRestApiGet.prototype, "sql", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], ReportScheduleRestApiGet.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ReportScheduleRestApiGet.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validator_config_json" }),
        __metadata("design:type", String)
    ], ReportScheduleRestApiGet.prototype, "validatorConfigJson", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validator_type" }),
        __metadata("design:type", String)
    ], ReportScheduleRestApiGet.prototype, "validatorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=working_timeout" }),
        __metadata("design:type", Number)
    ], ReportScheduleRestApiGet.prototype, "workingTimeout", void 0);
    return ReportScheduleRestApiGet;
}(SpeakeasyBase));
export { ReportScheduleRestApiGet };
