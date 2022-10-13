from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import employee
from . import error


@dataclass_json
@dataclass
class RetrieveEmployeeResponse:
    employee: Optional[employee.Employee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
