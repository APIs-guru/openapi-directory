from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import artistobject


@dataclass_json
@dataclass
class ArtistsObject:
    artists: Optional[List[artistobject.ArtistObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artists' }})
    
