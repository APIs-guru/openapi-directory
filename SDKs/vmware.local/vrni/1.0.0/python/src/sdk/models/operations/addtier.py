from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddTierPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddTierSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddTierRequest:
    path_params: AddTierPathParams = field()
    request: shared.TierRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddTierSecurity = field()
    

@dataclass
class AddTierResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    tier: Optional[shared.Tier] = field(default=None)
    
