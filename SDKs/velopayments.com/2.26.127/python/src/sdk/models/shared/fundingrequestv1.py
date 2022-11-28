from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FundingRequestV1:
    amount: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    
