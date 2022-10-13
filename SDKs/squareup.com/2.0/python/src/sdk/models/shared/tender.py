from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import additionalrecipient
from . import money
from . import tendercarddetails
from . import tendercashdetails
from . import money
from . import money


@dataclass_json
@dataclass
class Tender:
    additional_recipients: Optional[List[additionalrecipient.AdditionalRecipient]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additional_recipients' }})
    amount_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    card_details: Optional[tendercarddetails.TenderCardDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_details' }})
    cash_details: Optional[tendercashdetails.TenderCashDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cash_details' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_id' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_id' }})
    processing_fee_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processing_fee_money' }})
    tip_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tip_money' }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
