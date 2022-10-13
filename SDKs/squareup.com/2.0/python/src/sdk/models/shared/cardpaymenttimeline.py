from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CardPaymentTimeline:
    authorized_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorized_at' }})
    captured_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'captured_at' }})
    voided_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voided_at' }})
    
