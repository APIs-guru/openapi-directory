from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GeolocatePostPathParams:
    post_id: str = field(default=None, metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GeolocatePostRequestBody:
    latitude: float = field(default=None, metadata={'multipart_form': { 'field_name': 'latitude' }})
    location: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'location' }})
    longitude: float = field(default=None, metadata={'multipart_form': { 'field_name': 'longitude' }})
    

@dataclass
class GeolocatePostRequest:
    path_params: GeolocatePostPathParams = field(default=None)
    request: GeolocatePostRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class GeolocatePostResponse:
    content_type: str = field(default=None)
    post: Optional[shared.Post] = field(default=None)
    status_code: int = field(default=None)
    
