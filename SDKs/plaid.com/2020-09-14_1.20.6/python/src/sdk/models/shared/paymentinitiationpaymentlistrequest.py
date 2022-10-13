from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PaymentInitiationPaymentListRequest:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
