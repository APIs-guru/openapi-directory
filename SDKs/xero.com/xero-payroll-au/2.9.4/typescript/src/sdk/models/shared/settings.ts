import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Account } from "./account";


// SettingsTrackingCategoriesEmployeeGroups
/** 
 * The tracking category used for employees
**/
export class SettingsTrackingCategoriesEmployeeGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrackingCategoryID" })
  trackingCategoryId?: string;

  @Metadata({ data: "json, name=TrackingCategoryName" })
  trackingCategoryName?: string;
}


// SettingsTrackingCategoriesTimesheetCategories
/** 
 * The tracking category used for timesheets
**/
export class SettingsTrackingCategoriesTimesheetCategories extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrackingCategoryID" })
  trackingCategoryId?: string;

  @Metadata({ data: "json, name=TrackingCategoryName" })
  trackingCategoryName?: string;
}


// SettingsTrackingCategories
/** 
 * Tracking categories for Employees and Timesheets
**/
export class SettingsTrackingCategories extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmployeeGroups" })
  employeeGroups?: SettingsTrackingCategoriesEmployeeGroups;

  @Metadata({ data: "json, name=TimesheetCategories" })
  timesheetCategories?: SettingsTrackingCategoriesTimesheetCategories;
}


export class Settings extends SpeakeasyBase {
  @Metadata({ data: "json, name=Accounts", elemType: shared.Account })
  accounts?: Account[];

  @Metadata({ data: "json, name=DaysInPayrollYear" })
  daysInPayrollYear?: number;

  @Metadata({ data: "json, name=TrackingCategories" })
  trackingCategories?: SettingsTrackingCategories;
}
