from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import loyaltyaccount


@dataclass_json
@dataclass
class CreateLoyaltyAccountRequest:
    idempotency_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    loyalty_account: loyaltyaccount.LoyaltyAccount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loyalty_account' }})
    
