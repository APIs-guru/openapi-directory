from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SourceAccountResponseCurrencyEnum(str, Enum):
    USD = "USD"


@dataclass_json
@dataclass
class SourceAccountResponse:
    account_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountType' }})
    balance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    balance_visible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balanceVisible' }})
    currency: Optional[SourceAccountResponseCurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerId' }})
    funding_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundingAccountId' }})
    funding_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundingRef' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    payor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorId' }})
    physical_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physicalAccountId' }})
    physical_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physicalAccountName' }})
    pooled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pooled' }})
    rails_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'railsId' }})
    
