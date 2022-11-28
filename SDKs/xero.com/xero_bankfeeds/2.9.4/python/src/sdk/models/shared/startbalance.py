from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartBalance:
    r"""StartBalance
    The starting balance of the statement
    """
    
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    credit_debit_indicator: Optional[CreditDebitIndicatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditDebitIndicator') }})
    
