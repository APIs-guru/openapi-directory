from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScheduledTransactionResponseData:
    scheduled_transaction: ScheduledTransactionDetail = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduled_transaction') }})
    

@dataclass_json
@dataclass
class ScheduledTransactionResponse:
    data: ScheduledTransactionResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
