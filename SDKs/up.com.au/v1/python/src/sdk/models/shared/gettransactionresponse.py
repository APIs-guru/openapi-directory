from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import transactionresource


@dataclass_json
@dataclass
class GetTransactionResponse:
    data: transactionresource.TransactionResource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
