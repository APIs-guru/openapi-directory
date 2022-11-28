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
import { AbsenceEntitlement } from "./absenceentitlement";
import { Attribute } from "./attribute";
import { CostCenters } from "./costcenters";
import { Department } from "./department";
import { HolidayCalendar } from "./holidaycalendar";
import { Office } from "./office";
import { Supervisor } from "./supervisor";
import { WorkSchedule } from "./workschedule";
var EmployeeResponseDataAttributes = /** @class */ (function (_super) {
    __extends(EmployeeResponseDataAttributes, _super);
    function EmployeeResponseDataAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=absence_entitlement" }),
        __metadata("design:type", AbsenceEntitlement)
    ], EmployeeResponseDataAttributes.prototype, "absenceEntitlement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contract_end_date" }),
        __metadata("design:type", Attribute)
    ], EmployeeResponseDataAttributes.prototype, "contractEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cost_centers" }),
        __metadata("design:type", CostCenters)
    ], EmployeeResponseDataAttributes.prototype, "costCenters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Attribute)
    ], EmployeeResponseDataAttributes.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=department" }),
        __metadata("design:type", Department)
    ], EmployeeResponseDataAttributes.prototype, "department", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", Attribute)
    ], EmployeeResponseDataAttributes.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employment_type" }),
        __metadata("design:type", Attribute)
    ], EmployeeResponseDataAttributes.prototype, "employmentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", Attribute)
    ], EmployeeResponseDataAttributes.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fix_salary" }),
        __metadata("design:type", Attribute)
    ], EmployeeResponseDataAttributes.prototype, "fixSalary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", Attribute)
    ], EmployeeResponseDataAttributes.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hire_date" }),
        __metadata("design:type", Attribute)
    ], EmployeeResponseDataAttributes.prototype, "hireDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=holiday_calendar" }),
        __metadata("design:type", HolidayCalendar)
    ], EmployeeResponseDataAttributes.prototype, "holidayCalendar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hourly_salary" }),
        __metadata("design:type", Attribute)
    ], EmployeeResponseDataAttributes.prototype, "hourlySalary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Attribute)
    ], EmployeeResponseDataAttributes.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", Attribute)
    ], EmployeeResponseDataAttributes.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=office" }),
        __metadata("design:type", Office)
    ], EmployeeResponseDataAttributes.prototype, "office", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", Attribute)
    ], EmployeeResponseDataAttributes.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=probation_period_end" }),
        __metadata("design:type", Attribute)
    ], EmployeeResponseDataAttributes.prototype, "probationPeriodEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Attribute)
    ], EmployeeResponseDataAttributes.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supervisor" }),
        __metadata("design:type", Supervisor)
    ], EmployeeResponseDataAttributes.prototype, "supervisor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termination_date" }),
        __metadata("design:type", Attribute)
    ], EmployeeResponseDataAttributes.prototype, "terminationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termination_reason" }),
        __metadata("design:type", Attribute)
    ], EmployeeResponseDataAttributes.prototype, "terminationReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termination_type" }),
        __metadata("design:type", Attribute)
    ], EmployeeResponseDataAttributes.prototype, "terminationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vacation_day_balance" }),
        __metadata("design:type", Attribute)
    ], EmployeeResponseDataAttributes.prototype, "vacationDayBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weekly_working_hours" }),
        __metadata("design:type", Attribute)
    ], EmployeeResponseDataAttributes.prototype, "weeklyWorkingHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=work_schedule" }),
        __metadata("design:type", WorkSchedule)
    ], EmployeeResponseDataAttributes.prototype, "workSchedule", void 0);
    return EmployeeResponseDataAttributes;
}(SpeakeasyBase));
export { EmployeeResponseDataAttributes };
var EmployeeResponseData = /** @class */ (function (_super) {
    __extends(EmployeeResponseData, _super);
    function EmployeeResponseData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: EmployeeResponseDataAttributes }),
        __metadata("design:type", Array)
    ], EmployeeResponseData.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EmployeeResponseData.prototype, "type", void 0);
    return EmployeeResponseData;
}(SpeakeasyBase));
export { EmployeeResponseData };
var EmployeeResponse = /** @class */ (function (_super) {
    __extends(EmployeeResponse, _super);
    function EmployeeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", EmployeeResponseData)
    ], EmployeeResponse.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], EmployeeResponse.prototype, "success", void 0);
    return EmployeeResponse;
}(SpeakeasyBase));
export { EmployeeResponse };
