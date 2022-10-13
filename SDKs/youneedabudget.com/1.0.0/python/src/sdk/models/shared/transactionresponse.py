from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import transactiondetail


@dataclass_json
@dataclass
class TransactionResponseData:
    transaction: transactiondetail.TransactionDetail = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    

@dataclass_json
@dataclass
class TransactionResponse:
    data: TransactionResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
