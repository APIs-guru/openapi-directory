from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PaymentChannelRule:
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    display_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayOrder' }})
    element: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'element' }})
    max_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxLength' }})
    min_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minLength' }})
    required: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    validation: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validation' }})
    
