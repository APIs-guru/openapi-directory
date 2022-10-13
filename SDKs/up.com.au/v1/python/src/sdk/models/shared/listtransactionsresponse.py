from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import transactionresource


@dataclass_json
@dataclass
class ListTransactionsResponseLinks:
    next: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    prev: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    

@dataclass_json
@dataclass
class ListTransactionsResponse:
    data: List[transactionresource.TransactionResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    links: ListTransactionsResponseLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    
