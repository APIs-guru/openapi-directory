from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import employee


@dataclass_json
@dataclass
class Employees:
    employees: Optional[List[employee.Employee]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Employees' }})
    
