from dataclasses import dataclass, field



@dataclass
class CollectNowPathParams:
    device_id: int = field(default=None, metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectNowQueryParams:
    monitor_class: str = field(default=None, metadata={'query_param': { 'field_name': 'monitorClass', 'style': 'form', 'explode': True }})
    

@dataclass
class CollectNowRequest:
    path_params: CollectNowPathParams = field(default=None)
    query_params: CollectNowQueryParams = field(default=None)
    

@dataclass
class CollectNowResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
