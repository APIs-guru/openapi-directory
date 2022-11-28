from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetDeviceParameterHistoryPathParams:
    device_id: int = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceParameterHistoryQueryParams:
    monitor_type: str = field(metadata={'query_param': { 'field_name': 'monitorType', 'style': 'form', 'explode': True }})
    parameter_name: str = field(metadata={'query_param': { 'field_name': 'parameterName', 'style': 'form', 'explode': True }})
    from_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    monitor_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'monitorSid', 'style': 'form', 'explode': True }})
    to: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeviceParameterHistoryRequest:
    path_params: GetDeviceParameterHistoryPathParams = field()
    query_params: GetDeviceParameterHistoryQueryParams = field()
    

@dataclass
class GetDeviceParameterHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
