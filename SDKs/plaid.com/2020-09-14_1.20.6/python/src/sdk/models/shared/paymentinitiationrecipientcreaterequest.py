from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PaymentInitiationRecipientCreateRequest:
    address: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    bacs: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bacs' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    iban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iban' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
