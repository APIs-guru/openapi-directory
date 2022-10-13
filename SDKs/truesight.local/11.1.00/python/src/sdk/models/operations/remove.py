from dataclasses import dataclass, field



@dataclass
class RemovePathParams:
    device_id: int = field(default=None, metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveQueryParams:
    monitor_class: str = field(default=None, metadata={'query_param': { 'field_name': 'monitorClass', 'style': 'form', 'explode': True }})
    monitor_sid: str = field(default=None, metadata={'query_param': { 'field_name': 'monitorSid', 'style': 'form', 'explode': True }})
    

@dataclass
class RemoveRequest:
    path_params: RemovePathParams = field(default=None)
    query_params: RemoveQueryParams = field(default=None)
    

@dataclass
class RemoveResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
