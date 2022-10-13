from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import simplifiedshowobject


@dataclass_json
@dataclass
class ShowsObject:
    shows: Optional[List[simplifiedshowobject.SimplifiedShowObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shows' }})
    
