from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import paymentdeltav1


@dataclass_json
@dataclass
class PaymentDeltaResponseV1:
    content: Optional[List[paymentdeltav1.PaymentDeltaV1]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    links: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    page: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    
