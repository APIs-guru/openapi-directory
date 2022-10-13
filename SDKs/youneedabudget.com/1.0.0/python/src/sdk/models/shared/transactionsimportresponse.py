from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TransactionsImportResponseData:
    transaction_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_ids' }})
    

@dataclass_json
@dataclass
class TransactionsImportResponse:
    data: TransactionsImportResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
