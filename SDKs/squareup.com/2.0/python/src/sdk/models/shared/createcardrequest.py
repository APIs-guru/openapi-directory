from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import card


@dataclass_json
@dataclass
class CreateCardRequest:
    card: card.Card = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card' }})
    idempotency_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    source_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_id' }})
    verification_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification_token' }})
    
