from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DepositSwitchCreateRequestOptions:
    r"""DepositSwitchCreateRequestOptions
    Options to configure the `/deposit_switch/create` request. If provided, cannot be `null`.
    """
    
    transaction_item_access_tokens: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction_item_access_tokens') }})
    webhook: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    
