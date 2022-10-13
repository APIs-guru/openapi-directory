from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials:
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass_json
@dataclass
class PostAdminNearMissesRequestPatternRequestBody:
    basic_auth_credentials: Optional[PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicAuthCredentials' }})
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
class PostAdminNearMissesRequestPatternRequest:
    request: PostAdminNearMissesRequestPatternRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostAdminNearMissesRequestPattern200ApplicationJSONNearMisses:
    absolute_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'absoluteUrl' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    cookies: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookies' }})
    headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PostAdminNearMissesRequestPattern200ApplicationJSON:
    near_misses: Optional[List[PostAdminNearMissesRequestPattern200ApplicationJSONNearMisses]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nearMisses' }})
    

@dataclass
class PostAdminNearMissesRequestPatternResponse:
    content_type: str = field(default=None)
    post_admin_near_misses_request_pattern_200_application_json_object: Optional[PostAdminNearMissesRequestPattern200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
