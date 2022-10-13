from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_additionalproperties
from . import tfl_api_presentation_entities_place


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesPlace:
    additional_properties: Optional[List[tfl_api_presentation_entities_additionalproperties.TflAPIPresentationEntitiesAdditionalProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalProperties' }})
    children: Optional[List[tfl_api_presentation_entities_place.TflAPIPresentationEntitiesPlace]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'children' }})
    children_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childrenUrls' }})
    common_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commonName' }})
    distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distance' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lon' }})
    place_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeType' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
