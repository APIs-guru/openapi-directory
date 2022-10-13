from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccessTokenToPut:
    card_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CardId' }, 'form': { 'field_name': 'CardId' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }, 'form': { 'field_name': 'UserId' }})
    
