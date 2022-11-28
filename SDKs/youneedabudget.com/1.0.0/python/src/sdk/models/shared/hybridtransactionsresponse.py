from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HybridTransactionsResponseData:
    transactions: List[HybridTransaction] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    

@dataclass_json
@dataclass
class HybridTransactionsResponse:
    data: HybridTransactionsResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
