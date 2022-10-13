from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddTierPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddTierSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddTierRequest:
    path_params: AddTierPathParams = field(default=None)
    request: shared.TierRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddTierSecurity = field(default=None)
    

@dataclass
class AddTierResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tier: Optional[shared.Tier] = field(default=None)
    
