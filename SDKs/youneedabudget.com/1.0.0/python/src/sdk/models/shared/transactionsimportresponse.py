from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TransactionsImportResponseData:
    transaction_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction_ids') }})
    

@dataclass_json
@dataclass
class TransactionsImportResponse:
    data: TransactionsImportResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
