from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import loyaltyaccount


@dataclass_json
@dataclass
class CreateLoyaltyAccountResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    loyalty_account: Optional[loyaltyaccount.LoyaltyAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loyalty_account' }})
    
