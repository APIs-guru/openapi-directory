from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostAuthPollRequestBody:
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    

@dataclass_json
@dataclass
class PostAuthPoll200ApplicationJSON:
    apikey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apikey') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass
class PostAuthPollRequest:
    request: PostAuthPollRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAuthPollResponse:
    content_type: str = field()
    status_code: int = field()
    post_auth_poll_200_application_json_object: Optional[PostAuthPoll200ApplicationJSON] = field(default=None)
    
