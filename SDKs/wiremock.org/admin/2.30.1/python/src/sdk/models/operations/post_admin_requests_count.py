from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostAdminRequestsCountRequestBodyBasicAuthCredentials:
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass_json
@dataclass
class PostAdminRequestsCountRequestBody:
    basic_auth_credentials: Optional[PostAdminRequestsCountRequestBodyBasicAuthCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicAuthCredentials' }})
    body_patterns: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bodyPatterns' }})
    cookies: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookies' }})
    headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    query_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryParameters' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    url_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlPath' }})
    url_path_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlPathPattern' }})
    url_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlPattern' }})
    

@dataclass
class PostAdminRequestsCountRequest:
    request: PostAdminRequestsCountRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostAdminRequestsCount200ApplicationJSON:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    

@dataclass
class PostAdminRequestsCountResponse:
    content_type: str = field(default=None)
    post_admin_requests_count_200_application_json_object: Optional[PostAdminRequestsCount200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
