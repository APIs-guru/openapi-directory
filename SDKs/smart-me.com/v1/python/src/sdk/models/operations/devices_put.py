from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DevicesPutPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DevicesPutQueryParams:
    switch_state: bool = field(metadata={'query_param': { 'field_name': 'switchState', 'style': 'form', 'explode': True }})
    switch_number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'switchNumber', 'style': 'form', 'explode': True }})
    

@dataclass
class DevicesPutRequest:
    path_params: DevicesPutPathParams = field()
    query_params: DevicesPutQueryParams = field()
    

@dataclass
class DevicesPutResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    object: Optional[dict[str, Any]] = field(default=None)
    
