from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import invoiceacceptedpaymentmethods
from . import invoicecustomfield
from . import money
from . import invoicepaymentrequest
from . import invoicerecipient


@dataclass_json
@dataclass
class Invoice:
    accepted_payment_methods: Optional[invoiceacceptedpaymentmethods.InvoiceAcceptedPaymentMethods] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accepted_payment_methods' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    custom_fields: Optional[List[invoicecustomfield.InvoiceCustomField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    delivery_method: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delivery_method' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    invoice_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoice_number' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    next_payment_amount_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_payment_amount_money' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_id' }})
    payment_requests: Optional[List[invoicepaymentrequest.InvoicePaymentRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_requests' }})
    primary_recipient: Optional[invoicerecipient.InvoiceRecipient] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_recipient' }})
    public_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_url' }})
    scheduled_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduled_at' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subscription_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription_id' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
