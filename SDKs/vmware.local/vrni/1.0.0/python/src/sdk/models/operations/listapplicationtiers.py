from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListApplicationTiersPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListApplicationTiersSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListApplicationTiersRequest:
    path_params: ListApplicationTiersPathParams = field()
    security: ListApplicationTiersSecurity = field()
    

@dataclass
class ListApplicationTiersResponse:
    content_type: str = field()
    status_code: int = field()
    tier_list_response: Optional[shared.TierListResponse] = field(default=None)
    
