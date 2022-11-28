from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SettingsTrackingCategoriesEmployeeGroups:
    r"""SettingsTrackingCategoriesEmployeeGroups
    The tracking category used for employees
    """
    
    tracking_category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrackingCategoryID') }})
    tracking_category_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrackingCategoryName') }})
    

@dataclass_json
@dataclass
class SettingsTrackingCategoriesTimesheetCategories:
    r"""SettingsTrackingCategoriesTimesheetCategories
    The tracking category used for timesheets
    """
    
    tracking_category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrackingCategoryID') }})
    tracking_category_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrackingCategoryName') }})
    

@dataclass_json
@dataclass
class SettingsTrackingCategories:
    r"""SettingsTrackingCategories
    Tracking categories for Employees and Timesheets
    """
    
    employee_groups: Optional[SettingsTrackingCategoriesEmployeeGroups] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeGroups') }})
    timesheet_categories: Optional[SettingsTrackingCategoriesTimesheetCategories] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimesheetCategories') }})
    

@dataclass_json
@dataclass
class Settings:
    accounts: Optional[List[Account]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Accounts') }})
    days_in_payroll_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DaysInPayrollYear') }})
    tracking_categories: Optional[SettingsTrackingCategories] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrackingCategories') }})
    
