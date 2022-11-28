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
import { Account } from "./account";
// SettingsTrackingCategoriesEmployeeGroups
/**
 * The tracking category used for employees
**/
var SettingsTrackingCategoriesEmployeeGroups = /** @class */ (function (_super) {
    __extends(SettingsTrackingCategoriesEmployeeGroups, _super);
    function SettingsTrackingCategoriesEmployeeGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrackingCategoryID" }),
        __metadata("design:type", String)
    ], SettingsTrackingCategoriesEmployeeGroups.prototype, "trackingCategoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrackingCategoryName" }),
        __metadata("design:type", String)
    ], SettingsTrackingCategoriesEmployeeGroups.prototype, "trackingCategoryName", void 0);
    return SettingsTrackingCategoriesEmployeeGroups;
}(SpeakeasyBase));
export { SettingsTrackingCategoriesEmployeeGroups };
// SettingsTrackingCategoriesTimesheetCategories
/**
 * The tracking category used for timesheets
**/
var SettingsTrackingCategoriesTimesheetCategories = /** @class */ (function (_super) {
    __extends(SettingsTrackingCategoriesTimesheetCategories, _super);
    function SettingsTrackingCategoriesTimesheetCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrackingCategoryID" }),
        __metadata("design:type", String)
    ], SettingsTrackingCategoriesTimesheetCategories.prototype, "trackingCategoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrackingCategoryName" }),
        __metadata("design:type", String)
    ], SettingsTrackingCategoriesTimesheetCategories.prototype, "trackingCategoryName", void 0);
    return SettingsTrackingCategoriesTimesheetCategories;
}(SpeakeasyBase));
export { SettingsTrackingCategoriesTimesheetCategories };
// SettingsTrackingCategories
/**
 * Tracking categories for Employees and Timesheets
**/
var SettingsTrackingCategories = /** @class */ (function (_super) {
    __extends(SettingsTrackingCategories, _super);
    function SettingsTrackingCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployeeGroups" }),
        __metadata("design:type", SettingsTrackingCategoriesEmployeeGroups)
    ], SettingsTrackingCategories.prototype, "employeeGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimesheetCategories" }),
        __metadata("design:type", SettingsTrackingCategoriesTimesheetCategories)
    ], SettingsTrackingCategories.prototype, "timesheetCategories", void 0);
    return SettingsTrackingCategories;
}(SpeakeasyBase));
export { SettingsTrackingCategories };
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Accounts", elemType: Account }),
        __metadata("design:type", Array)
    ], Settings.prototype, "accounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DaysInPayrollYear" }),
        __metadata("design:type", Number)
    ], Settings.prototype, "daysInPayrollYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrackingCategories" }),
        __metadata("design:type", SettingsTrackingCategories)
    ], Settings.prototype, "trackingCategories", void 0);
    return Settings;
}(SpeakeasyBase));
export { Settings };
