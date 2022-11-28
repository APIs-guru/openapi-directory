from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransactionsResponseData:
    server_knowledge: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_knowledge') }})
    transactions: List[TransactionDetail] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    

@dataclass_json
@dataclass
class TransactionsResponse:
    data: TransactionsResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
