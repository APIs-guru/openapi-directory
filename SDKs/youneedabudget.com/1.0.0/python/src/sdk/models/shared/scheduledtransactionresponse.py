from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import scheduledtransactiondetail


@dataclass_json
@dataclass
class ScheduledTransactionResponseData:
    scheduled_transaction: scheduledtransactiondetail.ScheduledTransactionDetail = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduled_transaction' }})
    

@dataclass_json
@dataclass
class ScheduledTransactionResponse:
    data: ScheduledTransactionResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
