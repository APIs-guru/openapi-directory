from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import paymentauditcurrencyv3_enum


@dataclass_json
@dataclass
class SourceAccountSummaryV3:
    currency: Optional[paymentauditcurrencyv3_enum.PaymentAuditCurrencyV3Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    source_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceAccountId' }})
    total_cost: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCost' }})
    
