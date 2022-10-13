from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import transactiondetail


@dataclass_json
@dataclass
class TransactionsResponseData:
    server_knowledge: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_knowledge' }})
    transactions: List[transactiondetail.TransactionDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactions' }})
    

@dataclass_json
@dataclass
class TransactionsResponse:
    data: TransactionsResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
