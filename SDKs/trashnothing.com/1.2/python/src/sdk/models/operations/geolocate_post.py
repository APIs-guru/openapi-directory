from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GeolocatePostPathParams:
    post_id: str = field(metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GeolocatePostRequestBody:
    latitude: float = field(metadata={'multipart_form': { 'field_name': 'latitude' }})
    longitude: float = field(metadata={'multipart_form': { 'field_name': 'longitude' }})
    location: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'location' }})
    

@dataclass
class GeolocatePostRequest:
    path_params: GeolocatePostPathParams = field()
    request: GeolocatePostRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class GeolocatePostResponse:
    content_type: str = field()
    status_code: int = field()
    post: Optional[shared.Post] = field(default=None)
    
