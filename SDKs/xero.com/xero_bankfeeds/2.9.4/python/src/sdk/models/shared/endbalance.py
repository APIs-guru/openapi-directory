from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import creditdebitindicator_enum


@dataclass_json
@dataclass
class EndBalance:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    credit_debit_indicator: Optional[creditdebitindicator_enum.CreditDebitIndicatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditDebitIndicator' }})
    
