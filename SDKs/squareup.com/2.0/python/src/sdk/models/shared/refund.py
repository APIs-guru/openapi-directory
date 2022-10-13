from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import additionalrecipient
from . import money
from . import money


@dataclass_json
@dataclass
class Refund:
    additional_recipients: Optional[List[additionalrecipient.AdditionalRecipient]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additional_recipients' }})
    amount_money: money.Money = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    processing_fee_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processing_fee_money' }})
    reason: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tender_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tender_id' }})
    transaction_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_id' }})
    
