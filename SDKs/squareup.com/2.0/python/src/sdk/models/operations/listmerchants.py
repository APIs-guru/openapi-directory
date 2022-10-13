from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListMerchantsQueryParams:
    cursor: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    

@dataclass
class ListMerchantsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListMerchantsRequest:
    query_params: ListMerchantsQueryParams = field(default=None)
    security: ListMerchantsSecurity = field(default=None)
    

@dataclass
class ListMerchantsResponse:
    content_type: str = field(default=None)
    list_merchants_response: Optional[shared.ListMerchantsResponse] = field(default=None)
    status_code: int = field(default=None)
    
