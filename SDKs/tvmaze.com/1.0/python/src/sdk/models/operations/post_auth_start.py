from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostAuthStartRequestBody:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    email_confirmation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_confirmation' }})
    

@dataclass
class PostAuthStartRequest:
    request: PostAuthStartRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostAuthStart200ApplicationJSON:
    confirm_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confirm_url' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    

@dataclass
class PostAuthStartResponse:
    content_type: str = field(default=None)
    post_auth_start_200_application_json_object: Optional[PostAuthStart200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
