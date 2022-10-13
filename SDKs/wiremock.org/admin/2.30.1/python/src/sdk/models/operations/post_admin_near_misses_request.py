from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostAdminNearMissesRequestRequestBody:
    absolute_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'absoluteUrl' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    cookies: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookies' }})
    headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass
class PostAdminNearMissesRequestRequest:
    request: PostAdminNearMissesRequestRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostAdminNearMissesRequest200ApplicationJSONNearMisses:
    absolute_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'absoluteUrl' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    cookies: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookies' }})
    headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PostAdminNearMissesRequest200ApplicationJSON:
    near_misses: Optional[List[PostAdminNearMissesRequest200ApplicationJSONNearMisses]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nearMisses' }})
    

@dataclass
class PostAdminNearMissesRequestResponse:
    content_type: str = field(default=None)
    post_admin_near_misses_request_200_application_json_object: Optional[PostAdminNearMissesRequest200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
