from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RemovePathParams:
    device_id: int = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveQueryParams:
    monitor_class: str = field(metadata={'query_param': { 'field_name': 'monitorClass', 'style': 'form', 'explode': True }})
    monitor_sid: str = field(metadata={'query_param': { 'field_name': 'monitorSid', 'style': 'form', 'explode': True }})
    

@dataclass
class RemoveRequest:
    path_params: RemovePathParams = field()
    query_params: RemoveQueryParams = field()
    

@dataclass
class RemoveResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
