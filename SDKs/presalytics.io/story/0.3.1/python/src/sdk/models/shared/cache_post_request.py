from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CachePostRequest:
    current_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_user_id' }})
    nonce: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonce' }})
    subdocument: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subdocument' }})
    
