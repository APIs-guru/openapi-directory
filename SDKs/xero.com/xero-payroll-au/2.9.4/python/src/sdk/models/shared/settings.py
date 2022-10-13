from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import account


@dataclass_json
@dataclass
class SettingsTrackingCategoriesEmployeeGroups:
    tracking_category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrackingCategoryID' }})
    tracking_category_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrackingCategoryName' }})
    

@dataclass_json
@dataclass
class SettingsTrackingCategoriesTimesheetCategories:
    tracking_category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrackingCategoryID' }})
    tracking_category_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrackingCategoryName' }})
    

@dataclass_json
@dataclass
class SettingsTrackingCategories:
    employee_groups: Optional[SettingsTrackingCategoriesEmployeeGroups] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmployeeGroups' }})
    timesheet_categories: Optional[SettingsTrackingCategoriesTimesheetCategories] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimesheetCategories' }})
    

@dataclass_json
@dataclass
class Settings:
    accounts: Optional[List[account.Account]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Accounts' }})
    days_in_payroll_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DaysInPayrollYear' }})
    tracking_categories: Optional[SettingsTrackingCategories] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrackingCategories' }})
    
