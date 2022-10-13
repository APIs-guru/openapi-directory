from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesLineModeGroup:
    line_identifier: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineIdentifier' }})
    mode_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modeName' }})
    
