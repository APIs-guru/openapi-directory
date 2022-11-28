from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class SavePostLocationRequestBody:
    latitude: float = field(metadata={'multipart_form': { 'field_name': 'latitude' }})
    longitude: float = field(metadata={'multipart_form': { 'field_name': 'longitude' }})
    name: str = field(metadata={'multipart_form': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class SavePostLocation200ApplicationJSON:
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class SavePostLocationRequest:
    request: SavePostLocationRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class SavePostLocationResponse:
    content_type: str = field()
    status_code: int = field()
    save_post_location_200_application_json_objects: Optional[List[SavePostLocation200ApplicationJSON]] = field(default=None)
    
