from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListDeviceCodesQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'location_id', 'style': 'form', 'explode': True }})
    product_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'product_type', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDeviceCodesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListDeviceCodesRequest:
    query_params: ListDeviceCodesQueryParams = field(default=None)
    security: ListDeviceCodesSecurity = field(default=None)
    

@dataclass
class ListDeviceCodesResponse:
    content_type: str = field(default=None)
    list_device_codes_response: Optional[shared.ListDeviceCodesResponse] = field(default=None)
    status_code: int = field(default=None)
    
