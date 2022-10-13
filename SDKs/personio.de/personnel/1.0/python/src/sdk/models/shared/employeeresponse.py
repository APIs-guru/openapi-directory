from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import absenceentitlement
from . import attribute
from . import costcenters
from . import attribute
from . import department
from . import attribute
from . import attribute
from . import attribute
from . import attribute
from . import attribute
from . import attribute
from . import holidaycalendar
from . import attribute
from . import attribute
from . import attribute
from . import office
from . import attribute
from . import attribute
from . import attribute
from . import supervisor
from . import attribute
from . import attribute
from . import attribute
from . import attribute
from . import attribute
from . import workschedule


@dataclass_json
@dataclass
class EmployeeResponseDataAttributes:
    absence_entitlement: Optional[absenceentitlement.AbsenceEntitlement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'absence_entitlement' }})
    contract_end_date: Optional[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contract_end_date' }})
    cost_centers: Optional[costcenters.CostCenters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cost_centers' }})
    created_at: Optional[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    department: Optional[department.Department] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'department' }})
    email: Optional[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    employment_type: Optional[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employment_type' }})
    first_name: Optional[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    fix_salary: Optional[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fix_salary' }})
    gender: Optional[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    hire_date: Optional[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hire_date' }})
    holiday_calendar: Optional[holidaycalendar.HolidayCalendar] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'holiday_calendar' }})
    hourly_salary: Optional[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hourly_salary' }})
    id: Optional[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_name: Optional[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    office: Optional[office.Office] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'office' }})
    position: Optional[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    probation_period_end: Optional[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'probation_period_end' }})
    status: Optional[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    supervisor: Optional[supervisor.Supervisor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supervisor' }})
    termination_date: Optional[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termination_date' }})
    termination_reason: Optional[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termination_reason' }})
    termination_type: Optional[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termination_type' }})
    vacation_day_balance: Optional[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vacation_day_balance' }})
    weekly_working_hours: Optional[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weekly_working_hours' }})
    work_schedule: Optional[workschedule.WorkSchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'work_schedule' }})
    

@dataclass_json
@dataclass
class EmployeeResponseData:
    attributes: List[EmployeeResponseDataAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class EmployeeResponse:
    data: EmployeeResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    success: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    
