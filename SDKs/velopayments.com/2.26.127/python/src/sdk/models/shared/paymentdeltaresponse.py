from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import paymentdelta


@dataclass_json
@dataclass
class PaymentDeltaResponse:
    content: Optional[List[paymentdelta.PaymentDelta]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    links: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    page: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    
