from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostAuthStartRequestBody:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    email_confirmation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_confirmation') }})
    

@dataclass_json
@dataclass
class PostAuthStart200ApplicationJSON:
    confirm_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirm_url') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    

@dataclass
class PostAuthStartRequest:
    request: PostAuthStartRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAuthStartResponse:
    content_type: str = field()
    status_code: int = field()
    post_auth_start_200_application_json_object: Optional[PostAuthStart200ApplicationJSON] = field(default=None)
    
