from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeviceBySerialGetQueryParams:
    serial: int = field(default=None, metadata={'query_param': { 'field_name': 'serial', 'style': 'form', 'explode': True }})
    

@dataclass
class DeviceBySerialGetRequest:
    query_params: DeviceBySerialGetQueryParams = field(default=None)
    

@dataclass
class DeviceBySerialGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    device: Optional[shared.Device] = field(default=None)
    status_code: int = field(default=None)
    
