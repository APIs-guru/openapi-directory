from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DevicesPutPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DevicesPutQueryParams:
    switch_number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'switchNumber', 'style': 'form', 'explode': True }})
    switch_state: bool = field(default=None, metadata={'query_param': { 'field_name': 'switchState', 'style': 'form', 'explode': True }})
    

@dataclass
class DevicesPutRequest:
    path_params: DevicesPutPathParams = field(default=None)
    query_params: DevicesPutQueryParams = field(default=None)
    

@dataclass
class DevicesPutResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
