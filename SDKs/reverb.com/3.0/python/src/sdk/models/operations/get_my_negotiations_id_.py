from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyNegotiationsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyNegotiationsIDSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyNegotiationsIDRequest:
    path_params: GetMyNegotiationsIDPathParams = field()
    security: GetMyNegotiationsIDSecurity = field()
    

@dataclass
class GetMyNegotiationsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
