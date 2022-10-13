from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetWirelessLaNsQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWirelessLaNsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetWirelessLaNsRequest:
    query_params: GetWirelessLaNsQueryParams = field(default=None)
    security: GetWirelessLaNsSecurity = field(default=None)
    

@dataclass
class GetWirelessLaNsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    wirelesses: Optional[List[shared.Wireless]] = field(default=None)
    
