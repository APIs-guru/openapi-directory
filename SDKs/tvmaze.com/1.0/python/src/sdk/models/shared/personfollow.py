from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PersonFollowEmbedded:
    person: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'person' }})
    

@dataclass_json
@dataclass
class PersonFollow:
    embedded: Optional[PersonFollowEmbedded] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    person_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'person_id' }})
    
