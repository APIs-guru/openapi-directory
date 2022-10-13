from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import paymentresponsev4


@dataclass_json
@dataclass
class GetPaymentsForPayoutResponseV4:
    content: Optional[List[paymentresponsev4.PaymentResponseV4]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    links: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    page: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    summary: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    
