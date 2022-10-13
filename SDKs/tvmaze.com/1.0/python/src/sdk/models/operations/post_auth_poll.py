from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostAuthPollRequestBody:
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    

@dataclass
class PostAuthPollRequest:
    request: PostAuthPollRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostAuthPoll200ApplicationJSON:
    apikey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apikey' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass
class PostAuthPollResponse:
    content_type: str = field(default=None)
    post_auth_poll_200_application_json_object: Optional[PostAuthPoll200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
