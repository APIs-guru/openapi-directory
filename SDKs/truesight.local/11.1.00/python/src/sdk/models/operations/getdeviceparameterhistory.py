from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetDeviceParameterHistoryPathParams:
    device_id: int = field(default=None, metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceParameterHistoryQueryParams:
    from_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    monitor_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'monitorSid', 'style': 'form', 'explode': True }})
    monitor_type: str = field(default=None, metadata={'query_param': { 'field_name': 'monitorType', 'style': 'form', 'explode': True }})
    parameter_name: str = field(default=None, metadata={'query_param': { 'field_name': 'parameterName', 'style': 'form', 'explode': True }})
    to: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeviceParameterHistoryRequest:
    path_params: GetDeviceParameterHistoryPathParams = field(default=None)
    query_params: GetDeviceParameterHistoryQueryParams = field(default=None)
    

@dataclass
class GetDeviceParameterHistoryResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
