from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import autotopupconfig
from . import notifications

class SourceAccountResponseV2CurrencyEnum(str, Enum):
    USD = "USD"


@dataclass_json
@dataclass
class SourceAccountResponseV2:
    account_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountType' }})
    auto_top_up_config: Optional[autotopupconfig.AutoTopUpConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoTopUpConfig' }})
    balance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    balance_visible: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balanceVisible' }})
    currency: Optional[SourceAccountResponseV2CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerId' }})
    funding_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundingAccountId' }})
    funding_ref: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundingRef' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notifications: Optional[notifications.Notifications] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifications' }})
    payor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorId' }})
    physical_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physicalAccountId' }})
    physical_account_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physicalAccountName' }})
    pooled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pooled' }})
    rails_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'railsId' }})
    
