from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import money
from . import money
from . import invoicepaymentreminder
from . import money
from . import money


@dataclass_json
@dataclass
class InvoicePaymentRequest:
    automatic_payment_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automatic_payment_source' }})
    card_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_id' }})
    computed_amount_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computed_amount_money' }})
    due_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'due_date' }})
    fixed_amount_requested_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixed_amount_requested_money' }})
    percentage_requested: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage_requested' }})
    reminders: Optional[List[invoicepaymentreminder.InvoicePaymentReminder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reminders' }})
    request_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_method' }})
    request_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_type' }})
    rounding_adjustment_included_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rounding_adjustment_included_money' }})
    tipping_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tipping_enabled' }})
    total_completed_amount_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_completed_amount_money' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    
