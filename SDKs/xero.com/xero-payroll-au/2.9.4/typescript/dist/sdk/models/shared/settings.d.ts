import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * The tracking category used for employees
**/
export declare class SettingsTrackingCategoriesEmployeeGroups extends SpeakeasyBase {
    trackingCategoryId?: string;
    trackingCategoryName?: string;
}
/**
 * The tracking category used for timesheets
**/
export declare class SettingsTrackingCategoriesTimesheetCategories extends SpeakeasyBase {
    trackingCategoryId?: string;
    trackingCategoryName?: string;
}
/**
 * Tracking categories for Employees and Timesheets
**/
export declare class SettingsTrackingCategories extends SpeakeasyBase {
    employeeGroups?: SettingsTrackingCategoriesEmployeeGroups;
    timesheetCategories?: SettingsTrackingCategoriesTimesheetCategories;
}
export declare class Settings extends SpeakeasyBase {
    accounts?: Account[];
    daysInPayrollYear?: number;
    trackingCategories?: SettingsTrackingCategories;
}
