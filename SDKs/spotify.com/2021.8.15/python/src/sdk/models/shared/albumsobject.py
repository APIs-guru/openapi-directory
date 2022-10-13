from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import albumobject


@dataclass_json
@dataclass
class AlbumsObject:
    albums: Optional[List[albumobject.AlbumObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'albums' }})
    
