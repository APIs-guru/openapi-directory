from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ResetPathParams:
    device_id: int = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetQueryParams:
    monitor_class: str = field(metadata={'query_param': { 'field_name': 'monitorClass', 'style': 'form', 'explode': True }})
    monitor_sid: str = field(metadata={'query_param': { 'field_name': 'monitorSid', 'style': 'form', 'explode': True }})
    

@dataclass
class ResetRequest:
    path_params: ResetPathParams = field()
    query_params: ResetQueryParams = field()
    

@dataclass
class ResetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
