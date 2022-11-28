from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SourceAccountResponseV2CurrencyEnum(str, Enum):
    USD = "USD"


@dataclass_json
@dataclass
class SourceAccountResponseV2:
    account_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountType') }})
    balance_visible: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('balanceVisible') }})
    funding_ref: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingRef') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    physical_account_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('physicalAccountName') }})
    pooled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pooled') }})
    rails_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('railsId') }})
    auto_top_up_config: Optional[AutoTopUpConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoTopUpConfig') }})
    balance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    currency: Optional[SourceAccountResponseV2CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    funding_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingAccountId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notifications: Optional[Notifications] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    payor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorId') }})
    physical_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('physicalAccountId') }})
    
