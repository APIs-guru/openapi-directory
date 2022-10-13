from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import platform


@dataclass_json
@dataclass
class PlatformParentSingle:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    platforms: List[platform.Platform] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platforms' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    
