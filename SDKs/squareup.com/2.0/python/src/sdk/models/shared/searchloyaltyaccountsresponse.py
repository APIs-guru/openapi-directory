from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import loyaltyaccount


@dataclass_json
@dataclass
class SearchLoyaltyAccountsResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    loyalty_accounts: Optional[List[loyaltyaccount.LoyaltyAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loyalty_accounts' }})
    
