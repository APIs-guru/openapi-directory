from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SaveTransactionsResponseData:
    server_knowledge: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_knowledge') }})
    transaction_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction_ids') }})
    duplicate_import_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicate_import_ids') }})
    transaction: Optional[TransactionDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    transactions: Optional[List[TransactionDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    

@dataclass_json
@dataclass
class SaveTransactionsResponse:
    data: SaveTransactionsResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
