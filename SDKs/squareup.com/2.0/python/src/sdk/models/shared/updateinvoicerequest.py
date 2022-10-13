from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import invoice


@dataclass_json
@dataclass
class UpdateInvoiceRequest:
    fields_to_clear: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields_to_clear' }})
    idempotency_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    invoice: invoice.Invoice = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoice' }})
    
