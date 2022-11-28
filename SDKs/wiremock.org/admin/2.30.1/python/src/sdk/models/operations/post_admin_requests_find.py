from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostAdminRequestsFindRequestBodyBasicAuthCredentials:
    r"""PostAdminRequestsFindRequestBodyBasicAuthCredentials
    Pre-emptive basic auth credentials to match against
    """
    
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class PostAdminRequestsFindRequestBody:
    basic_auth_credentials: Optional[PostAdminRequestsFindRequestBodyBasicAuthCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAuthCredentials') }})
    body_patterns: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bodyPatterns') }})
    cookies: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookies') }})
    headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    query_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParameters') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    url_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlPath') }})
    url_path_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlPathPattern') }})
    url_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlPattern') }})
    

@dataclass
class PostAdminRequestsFindRequest:
    request: PostAdminRequestsFindRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAdminRequestsFindResponse:
    content_type: str = field()
    status_code: int = field()
    
