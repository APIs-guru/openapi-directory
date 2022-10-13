from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DepositSwitchCreateRequestOptions:
    transaction_item_access_tokens: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_item_access_tokens' }})
    webhook: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook' }})
    
