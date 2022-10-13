from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PublishInvoiceRequest:
    idempotency_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
