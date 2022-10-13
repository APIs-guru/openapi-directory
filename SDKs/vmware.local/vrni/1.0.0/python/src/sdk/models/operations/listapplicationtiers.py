from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListApplicationTiersPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListApplicationTiersSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListApplicationTiersRequest:
    path_params: ListApplicationTiersPathParams = field(default=None)
    security: ListApplicationTiersSecurity = field(default=None)
    

@dataclass
class ListApplicationTiersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tier_list_response: Optional[shared.TierListResponse] = field(default=None)
    
