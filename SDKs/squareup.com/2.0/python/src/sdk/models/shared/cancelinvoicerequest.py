from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CancelInvoiceRequest:
    version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
