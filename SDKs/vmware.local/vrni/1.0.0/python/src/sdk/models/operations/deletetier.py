from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteTierPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    tier_id: str = field(metadata={'path_param': { 'field_name': 'tier-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTierSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteTierRequest:
    path_params: DeleteTierPathParams = field()
    security: DeleteTierSecurity = field()
    

@dataclass
class DeleteTierResponse:
    content_type: str = field()
    status_code: int = field()
    
