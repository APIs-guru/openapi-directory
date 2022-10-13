from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GameStoreFull:
    game_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'game_id' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    store_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'store_id' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
