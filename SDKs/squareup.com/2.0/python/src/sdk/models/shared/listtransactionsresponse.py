from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import transaction


@dataclass_json
@dataclass
class ListTransactionsResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    transactions: Optional[List[transaction.Transaction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactions' }})
    
