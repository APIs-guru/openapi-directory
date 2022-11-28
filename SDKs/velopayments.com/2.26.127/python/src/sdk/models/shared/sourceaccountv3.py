from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SourceAccountV3:
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    source_account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAccountId') }})
    source_account_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAccountName') }})
    total_payout_cost: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPayoutCost') }})
    
