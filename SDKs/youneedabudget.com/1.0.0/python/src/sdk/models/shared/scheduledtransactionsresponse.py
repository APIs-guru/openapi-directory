from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScheduledTransactionsResponseData:
    scheduled_transactions: List[ScheduledTransactionDetail] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduled_transactions') }})
    server_knowledge: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_knowledge') }})
    

@dataclass_json
@dataclass
class ScheduledTransactionsResponse:
    data: ScheduledTransactionsResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
