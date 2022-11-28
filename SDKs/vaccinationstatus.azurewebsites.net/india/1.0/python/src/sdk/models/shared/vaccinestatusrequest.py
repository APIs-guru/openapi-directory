from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VaccineStatusRequest:
    beneficiary_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beneficiaryId') }})
    mobile: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobile') }})
    
