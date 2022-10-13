from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InvoiceCustomField:
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    placement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placement' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
