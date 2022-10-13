from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import money
from . import disputedpayment


@dataclass_json
@dataclass
class Dispute:
    amount_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    brand_dispute_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand_dispute_id' }})
    card_brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_brand' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    dispute_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dispute_id' }})
    disputed_payment: Optional[disputedpayment.DisputedPayment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disputed_payment' }})
    due_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'due_at' }})
    evidence_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidence_ids' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    reported_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reported_at' }})
    reported_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reported_date' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
