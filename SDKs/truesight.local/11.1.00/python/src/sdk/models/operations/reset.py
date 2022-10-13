from dataclasses import dataclass, field



@dataclass
class ResetPathParams:
    device_id: int = field(default=None, metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetQueryParams:
    monitor_class: str = field(default=None, metadata={'query_param': { 'field_name': 'monitorClass', 'style': 'form', 'explode': True }})
    monitor_sid: str = field(default=None, metadata={'query_param': { 'field_name': 'monitorSid', 'style': 'form', 'explode': True }})
    

@dataclass
class ResetRequest:
    path_params: ResetPathParams = field(default=None)
    query_params: ResetQueryParams = field(default=None)
    

@dataclass
class ResetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
