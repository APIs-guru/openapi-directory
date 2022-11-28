from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SuperMembership:
    employee_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeNumber') }})
    super_fund_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuperFundID') }})
    super_membership_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuperMembershipID') }})
    
