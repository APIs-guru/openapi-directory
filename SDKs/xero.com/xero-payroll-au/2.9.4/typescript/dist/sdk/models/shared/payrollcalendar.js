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
import { CalendarTypeEnum } from "./calendartypeenum";
import { ValidationError } from "./validationerror";
var PayrollCalendarInput = /** @class */ (function (_super) {
    __extends(PayrollCalendarInput, _super);
    function PayrollCalendarInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalendarType" }),
        __metadata("design:type", String)
    ], PayrollCalendarInput.prototype, "calendarType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], PayrollCalendarInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentDate" }),
        __metadata("design:type", String)
    ], PayrollCalendarInput.prototype, "paymentDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayrollCalendarID" }),
        __metadata("design:type", String)
    ], PayrollCalendarInput.prototype, "payrollCalendarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate" }),
        __metadata("design:type", String)
    ], PayrollCalendarInput.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError }),
        __metadata("design:type", Array)
    ], PayrollCalendarInput.prototype, "validationErrors", void 0);
    return PayrollCalendarInput;
}(SpeakeasyBase));
export { PayrollCalendarInput };
var PayrollCalendar = /** @class */ (function (_super) {
    __extends(PayrollCalendar, _super);
    function PayrollCalendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalendarType" }),
        __metadata("design:type", String)
    ], PayrollCalendar.prototype, "calendarType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], PayrollCalendar.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentDate" }),
        __metadata("design:type", String)
    ], PayrollCalendar.prototype, "paymentDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayrollCalendarID" }),
        __metadata("design:type", String)
    ], PayrollCalendar.prototype, "payrollCalendarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate" }),
        __metadata("design:type", String)
    ], PayrollCalendar.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" }),
        __metadata("design:type", String)
    ], PayrollCalendar.prototype, "updatedDateUtc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError }),
        __metadata("design:type", Array)
    ], PayrollCalendar.prototype, "validationErrors", void 0);
    return PayrollCalendar;
}(SpeakeasyBase));
export { PayrollCalendar };
