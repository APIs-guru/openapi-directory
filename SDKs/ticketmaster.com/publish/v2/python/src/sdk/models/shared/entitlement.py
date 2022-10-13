from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import source

class EntitlementRelatedEntityTypeEnum(str, Enum):
    EVENT = "event"
    VENUE = "venue"
    ATTRACTION = "attraction"

class EntitlementSourceEnum(str, Enum):
    TICKETMASTER = "ticketmaster"


@dataclass_json
@dataclass
class Entitlement:
    data: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    related_entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedEntityId' }})
    related_entity_source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedEntitySource' }})
    related_entity_type: EntitlementRelatedEntityTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedEntityType' }})
    source: EntitlementSourceEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionNumber' }})
    
