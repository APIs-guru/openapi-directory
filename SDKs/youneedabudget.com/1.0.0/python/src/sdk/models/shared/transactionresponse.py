from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransactionResponseData:
    transaction: TransactionDetail = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    

@dataclass_json
@dataclass
class TransactionResponse:
    data: TransactionResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
