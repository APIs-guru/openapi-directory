import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";



// SettingsTrackingCategoriesEmployeeGroups
/** 
 * The tracking category used for employees
**/
export class SettingsTrackingCategoriesEmployeeGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrackingCategoryID" })
  trackingCategoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=TrackingCategoryName" })
  trackingCategoryName?: string;
}


// SettingsTrackingCategoriesTimesheetCategories
/** 
 * The tracking category used for timesheets
**/
export class SettingsTrackingCategoriesTimesheetCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrackingCategoryID" })
  trackingCategoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=TrackingCategoryName" })
  trackingCategoryName?: string;
}


// SettingsTrackingCategories
/** 
 * Tracking categories for Employees and Timesheets
**/
export class SettingsTrackingCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmployeeGroups" })
  employeeGroups?: SettingsTrackingCategoriesEmployeeGroups;

  @SpeakeasyMetadata({ data: "json, name=TimesheetCategories" })
  timesheetCategories?: SettingsTrackingCategoriesTimesheetCategories;
}


export class Settings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Accounts", elemType: Account })
  accounts?: Account[];

  @SpeakeasyMetadata({ data: "json, name=DaysInPayrollYear" })
  daysInPayrollYear?: number;

  @SpeakeasyMetadata({ data: "json, name=TrackingCategories" })
  trackingCategories?: SettingsTrackingCategories;
}
