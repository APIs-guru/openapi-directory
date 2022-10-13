from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdatePostPathParams:
    post_id: str = field(default=None, metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePostRequestBody:
    content: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'content' }})
    expires_in: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'expires_in' }})
    fair_offer: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'fair_offer' }})
    latitude: Optional[float] = field(default=None, metadata={'multipart_form': { 'field_name': 'latitude' }})
    location: str = field(default=None, metadata={'multipart_form': { 'field_name': 'location' }})
    longitude: Optional[float] = field(default=None, metadata={'multipart_form': { 'field_name': 'longitude' }})
    photo_ids: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'photo_ids' }})
    preferences: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'preferences' }})
    session: str = field(default=None, metadata={'multipart_form': { 'field_name': 'session' }})
    title: str = field(default=None, metadata={'multipart_form': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclass
class UpdatePostRequest:
    path_params: UpdatePostPathParams = field(default=None)
    request: UpdatePostRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclass
class UpdatePost200ApplicationJSON:
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    preference_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preference_key' }})
    result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    session: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session' }})
    

@dataclass
class UpdatePostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_post_200_application_json_object: Optional[UpdatePost200ApplicationJSON] = field(default=None)
    
