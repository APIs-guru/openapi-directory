from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import employeewage
from . import error


@dataclass_json
@dataclass
class GetEmployeeWageResponse:
    employee_wage: Optional[employeewage.EmployeeWage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee_wage' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
