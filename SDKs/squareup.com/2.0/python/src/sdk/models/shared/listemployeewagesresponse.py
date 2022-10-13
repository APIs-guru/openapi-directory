from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import employeewage
from . import error


@dataclass_json
@dataclass
class ListEmployeeWagesResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    employee_wages: Optional[List[employeewage.EmployeeWage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee_wages' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
