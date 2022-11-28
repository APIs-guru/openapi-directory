from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetListingsIDNegotiationPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingsIDNegotiationSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetListingsIDNegotiationRequest:
    path_params: GetListingsIDNegotiationPathParams = field()
    security: GetListingsIDNegotiationSecurity = field()
    

@dataclass
class GetListingsIDNegotiationResponse:
    content_type: str = field()
    status_code: int = field()
    
