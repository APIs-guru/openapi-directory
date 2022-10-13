from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import employee
from . import error


@dataclass_json
@dataclass
class ListEmployeesResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    employees: Optional[List[employee.Employee]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employees' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
