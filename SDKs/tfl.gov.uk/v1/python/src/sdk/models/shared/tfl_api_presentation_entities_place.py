from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesPlace:
    additional_properties: Optional[List[TflAPIPresentationEntitiesAdditionalProperties]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalProperties') }})
    children: Optional[List[TflAPIPresentationEntitiesPlace]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('children') }})
    children_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childrenUrls') }})
    common_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonName') }})
    distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distance') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lon') }})
    place_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeType') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
