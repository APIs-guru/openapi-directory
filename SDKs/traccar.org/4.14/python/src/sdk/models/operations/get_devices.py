from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDevicesQueryParams:
    all: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    unique_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uniqueId', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDevicesRequest:
    query_params: GetDevicesQueryParams = field(default=None)
    

@dataclass
class GetDevicesResponse:
    content_type: str = field(default=None)
    devices: Optional[List[shared.Device]] = field(default=None)
    status_code: int = field(default=None)
    
