from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EmployeeInfo:
    r"""EmployeeInfo
    The employee info model
    """
    
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employeeId') }})
    status_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCode') }})
    status_type_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusTypeCode') }})
    
