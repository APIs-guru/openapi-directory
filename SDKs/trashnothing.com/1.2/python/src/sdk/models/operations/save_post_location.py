from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class SavePostLocationRequestBody:
    latitude: float = field(default=None, metadata={'multipart_form': { 'field_name': 'latitude' }})
    longitude: float = field(default=None, metadata={'multipart_form': { 'field_name': 'longitude' }})
    name: str = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    

@dataclass
class SavePostLocationRequest:
    request: SavePostLocationRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclass
class SavePostLocation200ApplicationJSON:
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class SavePostLocationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    save_post_location_200_application_json_objects: Optional[List[SavePostLocation200ApplicationJSON]] = field(default=None)
    
