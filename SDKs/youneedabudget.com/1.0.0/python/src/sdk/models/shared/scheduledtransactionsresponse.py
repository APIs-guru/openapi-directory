from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import scheduledtransactiondetail


@dataclass_json
@dataclass
class ScheduledTransactionsResponseData:
    scheduled_transactions: List[scheduledtransactiondetail.ScheduledTransactionDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduled_transactions' }})
    server_knowledge: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_knowledge' }})
    

@dataclass_json
@dataclass
class ScheduledTransactionsResponse:
    data: ScheduledTransactionsResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
