from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetAsyncEventQueryParams:
    last_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAsyncEventSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAsyncEventRequest:
    query_params: GetAsyncEventQueryParams = field(default=None)
    security: GetAsyncEventSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetAsyncEvent200ApplicationJSONResult:
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel_id' }})
    errors: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'job_id' }})
    result_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result_url' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    

@dataclass_json
@dataclass
class GetAsyncEvent200ApplicationJSON:
    result: Optional[List[GetAsyncEvent200ApplicationJSONResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class GetAsyncEvent401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAsyncEvent500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetAsyncEventResponse:
    content_type: str = field(default=None)
    get_async_event_200_application_json_object: Optional[GetAsyncEvent200ApplicationJSON] = field(default=None)
    get_async_event_401_application_json_object: Optional[GetAsyncEvent401ApplicationJSON] = field(default=None)
    get_async_event_500_application_json_object: Optional[GetAsyncEvent500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
