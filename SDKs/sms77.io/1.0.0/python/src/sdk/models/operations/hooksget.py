from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class HooksGetActionEnum(str, Enum):
    READ = "read"


@dataclass
class HooksGetQueryParams:
    action: HooksGetActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    

@dataclass
class HooksGetRequest:
    query_params: HooksGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class HooksGet200ApplicationJSONHooks:
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_type' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    request_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_method' }})
    target_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_url' }})
    

@dataclass_json
@dataclass
class HooksGet200ApplicationJSON:
    hooks: Optional[List[HooksGet200ApplicationJSONHooks]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hooks' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    

@dataclass
class HooksGetResponse:
    content_type: str = field(default=None)
    hooks_get_200_application_json_object: Optional[HooksGet200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
