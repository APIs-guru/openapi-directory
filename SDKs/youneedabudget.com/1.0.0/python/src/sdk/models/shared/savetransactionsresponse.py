from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import transactiondetail
from . import transactiondetail


@dataclass_json
@dataclass
class SaveTransactionsResponseData:
    duplicate_import_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duplicate_import_ids' }})
    server_knowledge: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_knowledge' }})
    transaction: Optional[transactiondetail.TransactionDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    transaction_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_ids' }})
    transactions: Optional[List[transactiondetail.TransactionDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactions' }})
    

@dataclass_json
@dataclass
class SaveTransactionsResponse:
    data: SaveTransactionsResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
