from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import classification
from . import image
from . import source

class AttractionTypeEnum(str, Enum):
    EVENT = "event"
    VENUE = "venue"
    ATTRACTION = "attraction"


@dataclass_json
@dataclass
class Attraction:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    additional_infos: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalInfos' }})
    classifications: Optional[List[classification.Classification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classifications' }})
    descriptions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descriptions' }})
    discoverable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discoverable' }})
    images: Optional[List[image.Image]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    names: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'names' }})
    references: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'references' }})
    relationships: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationships' }})
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    test: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'test' }})
    type: AttractionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
