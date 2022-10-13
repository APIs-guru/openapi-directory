from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateLocationRequestBody:
    latitude: float = field(default=None, metadata={'multipart_form': { 'field_name': 'latitude' }})
    longitude: float = field(default=None, metadata={'multipart_form': { 'field_name': 'longitude' }})
    name: str = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    radius: float = field(default=None, metadata={'multipart_form': { 'field_name': 'radius' }})
    

@dataclass
class UpdateLocationRequest:
    request: UpdateLocationRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UpdateLocationResponse:
    content_type: str = field(default=None)
    current_user: Optional[shared.CurrentUser] = field(default=None)
    status_code: int = field(default=None)
    
