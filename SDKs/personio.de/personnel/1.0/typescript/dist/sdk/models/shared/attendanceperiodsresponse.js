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
var AttendancePeriodsResponseDataAttributes = /** @class */ (function (_super) {
    __extends(AttendancePeriodsResponseDataAttributes, _super);
    function AttendancePeriodsResponseDataAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=break" }),
        __metadata("design:type", Number)
    ], AttendancePeriodsResponseDataAttributes.prototype, "break", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], AttendancePeriodsResponseDataAttributes.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], AttendancePeriodsResponseDataAttributes.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employee" }),
        __metadata("design:type", Number)
    ], AttendancePeriodsResponseDataAttributes.prototype, "employee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_time" }),
        __metadata("design:type", String)
    ], AttendancePeriodsResponseDataAttributes.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_holiday" }),
        __metadata("design:type", Boolean)
    ], AttendancePeriodsResponseDataAttributes.prototype, "isHoliday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_on_time_off" }),
        __metadata("design:type", Boolean)
    ], AttendancePeriodsResponseDataAttributes.prototype, "isOnTimeOff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_time" }),
        __metadata("design:type", String)
    ], AttendancePeriodsResponseDataAttributes.prototype, "startTime", void 0);
    return AttendancePeriodsResponseDataAttributes;
}(SpeakeasyBase));
export { AttendancePeriodsResponseDataAttributes };
var AttendancePeriodsResponseData = /** @class */ (function (_super) {
    __extends(AttendancePeriodsResponseData, _super);
    function AttendancePeriodsResponseData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: AttendancePeriodsResponseDataAttributes }),
        __metadata("design:type", Array)
    ], AttendancePeriodsResponseData.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], AttendancePeriodsResponseData.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AttendancePeriodsResponseData.prototype, "type", void 0);
    return AttendancePeriodsResponseData;
}(SpeakeasyBase));
export { AttendancePeriodsResponseData };
var AttendancePeriodsResponse = /** @class */ (function (_super) {
    __extends(AttendancePeriodsResponse, _super);
    function AttendancePeriodsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: AttendancePeriodsResponseData }),
        __metadata("design:type", Array)
    ], AttendancePeriodsResponse.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], AttendancePeriodsResponse.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], AttendancePeriodsResponse.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], AttendancePeriodsResponse.prototype, "success", void 0);
    return AttendancePeriodsResponse;
}(SpeakeasyBase));
export { AttendancePeriodsResponse };
