from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import invoice


@dataclass_json
@dataclass
class CreateInvoiceRequest:
    idempotency_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    invoice: invoice.Invoice = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoice' }})
    
