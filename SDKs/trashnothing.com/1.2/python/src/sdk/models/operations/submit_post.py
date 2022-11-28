from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class SubmitPostRequestBody:
    location: str = field(metadata={'multipart_form': { 'field_name': 'location' }})
    session: str = field(metadata={'multipart_form': { 'field_name': 'session' }})
    title: str = field(metadata={'multipart_form': { 'field_name': 'title' }})
    type: str = field(metadata={'multipart_form': { 'field_name': 'type' }})
    content: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'content' }})
    expires_in: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'expires_in' }})
    fair_offer: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'fair_offer' }})
    group_ids: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'group_ids' }})
    latitude: Optional[float] = field(default=None, metadata={'multipart_form': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'multipart_form': { 'field_name': 'longitude' }})
    photo_ids: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'photo_ids' }})
    preferences: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'preferences' }})
    

@dataclass_json
@dataclass
class SubmitPost200ApplicationJSON:
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    preference_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preference_key') }})
    result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    session: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('session') }})
    

@dataclass
class SubmitPostRequest:
    request: Optional[SubmitPostRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class SubmitPostResponse:
    content_type: str = field()
    status_code: int = field()
    submit_post_200_application_json_object: Optional[SubmitPost200ApplicationJSON] = field(default=None)
    
