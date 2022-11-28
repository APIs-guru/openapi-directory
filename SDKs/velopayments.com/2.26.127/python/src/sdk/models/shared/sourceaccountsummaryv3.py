from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceAccountSummaryV3:
    source_account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAccountId') }})
    total_cost: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCost') }})
    currency: Optional[PaymentAuditCurrencyV3Enum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    
