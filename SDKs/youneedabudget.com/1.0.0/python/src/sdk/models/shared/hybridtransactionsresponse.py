from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import hybridtransaction


@dataclass_json
@dataclass
class HybridTransactionsResponseData:
    transactions: List[hybridtransaction.HybridTransaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactions' }})
    

@dataclass_json
@dataclass
class HybridTransactionsResponse:
    data: HybridTransactionsResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
