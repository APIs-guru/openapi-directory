from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CollectNowPathParams:
    device_id: int = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectNowQueryParams:
    monitor_class: str = field(metadata={'query_param': { 'field_name': 'monitorClass', 'style': 'form', 'explode': True }})
    

@dataclass
class CollectNowRequest:
    path_params: CollectNowPathParams = field()
    query_params: CollectNowQueryParams = field()
    

@dataclass
class CollectNowResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
