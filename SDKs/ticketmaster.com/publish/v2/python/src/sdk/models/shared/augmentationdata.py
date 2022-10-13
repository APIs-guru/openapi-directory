from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import change

class AugmentationDataRelatedEntityTypeEnum(str, Enum):
    EVENT = "event"
    ATTRACTION = "attraction"
    VENUE = "venue"


@dataclass_json
@dataclass
class AugmentationData:
    changes: List[change.Change] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changes' }})
    related_entity_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedEntityId' }})
    related_entity_type: AugmentationDataRelatedEntityTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedEntityType' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    source: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    version_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionNumber' }})
    
