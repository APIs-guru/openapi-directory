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
import { LeavePeriod } from "./leaveperiod";
import { ValidationError } from "./validationerror";
var LeaveApplication = /** @class */ (function (_super) {
    __extends(LeaveApplication, _super);
    function LeaveApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], LeaveApplication.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployeeID" }),
        __metadata("design:type", String)
    ], LeaveApplication.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndDate" }),
        __metadata("design:type", String)
    ], LeaveApplication.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LeaveApplicationID" }),
        __metadata("design:type", String)
    ], LeaveApplication.prototype, "leaveApplicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LeavePeriods", elemType: LeavePeriod }),
        __metadata("design:type", Array)
    ], LeaveApplication.prototype, "leavePeriods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LeaveTypeID" }),
        __metadata("design:type", String)
    ], LeaveApplication.prototype, "leaveTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate" }),
        __metadata("design:type", String)
    ], LeaveApplication.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], LeaveApplication.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" }),
        __metadata("design:type", String)
    ], LeaveApplication.prototype, "updatedDateUtc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError }),
        __metadata("design:type", Array)
    ], LeaveApplication.prototype, "validationErrors", void 0);
    return LeaveApplication;
}(SpeakeasyBase));
export { LeaveApplication };
var LeaveApplicationInput = /** @class */ (function (_super) {
    __extends(LeaveApplicationInput, _super);
    function LeaveApplicationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], LeaveApplicationInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployeeID" }),
        __metadata("design:type", String)
    ], LeaveApplicationInput.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndDate" }),
        __metadata("design:type", String)
    ], LeaveApplicationInput.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LeaveApplicationID" }),
        __metadata("design:type", String)
    ], LeaveApplicationInput.prototype, "leaveApplicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LeavePeriods", elemType: LeavePeriod }),
        __metadata("design:type", Array)
    ], LeaveApplicationInput.prototype, "leavePeriods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LeaveTypeID" }),
        __metadata("design:type", String)
    ], LeaveApplicationInput.prototype, "leaveTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate" }),
        __metadata("design:type", String)
    ], LeaveApplicationInput.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], LeaveApplicationInput.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError }),
        __metadata("design:type", Array)
    ], LeaveApplicationInput.prototype, "validationErrors", void 0);
    return LeaveApplicationInput;
}(SpeakeasyBase));
export { LeaveApplicationInput };
