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
import { Meta34 } from "./meta34";
import { Meta33 } from "./meta33";
import { Meta36 } from "./meta36";
import { Meta35 } from "./meta35";
var ReportScheduleRestApiGetList = /** @class */ (function (_super) {
    __extends(ReportScheduleRestApiGetList, _super);
    function ReportScheduleRestApiGetList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], ReportScheduleRestApiGetList.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_by" }),
        __metadata("design:type", Meta34)
    ], ReportScheduleRestApiGetList.prototype, "changedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_on" }),
        __metadata("design:type", Date)
    ], ReportScheduleRestApiGetList.prototype, "changedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_on_delta_humanized" }),
        __metadata("design:type", Object)
    ], ReportScheduleRestApiGetList.prototype, "changedOnDeltaHumanized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", Meta33)
    ], ReportScheduleRestApiGetList.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_on" }),
        __metadata("design:type", Date)
    ], ReportScheduleRestApiGetList.prototype, "createdOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creation_method" }),
        __metadata("design:type", String)
    ], ReportScheduleRestApiGetList.prototype, "creationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crontab" }),
        __metadata("design:type", String)
    ], ReportScheduleRestApiGetList.prototype, "crontab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crontab_humanized" }),
        __metadata("design:type", Object)
    ], ReportScheduleRestApiGetList.prototype, "crontabHumanized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReportScheduleRestApiGetList.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ReportScheduleRestApiGetList.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_eval_dttm" }),
        __metadata("design:type", Date)
    ], ReportScheduleRestApiGetList.prototype, "lastEvalDttm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_state" }),
        __metadata("design:type", String)
    ], ReportScheduleRestApiGetList.prototype, "lastState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReportScheduleRestApiGetList.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owners" }),
        __metadata("design:type", Meta36)
    ], ReportScheduleRestApiGetList.prototype, "owners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipients" }),
        __metadata("design:type", Meta35)
    ], ReportScheduleRestApiGetList.prototype, "recipients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], ReportScheduleRestApiGetList.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ReportScheduleRestApiGetList.prototype, "type", void 0);
    return ReportScheduleRestApiGetList;
}(SpeakeasyBase));
export { ReportScheduleRestApiGetList };
