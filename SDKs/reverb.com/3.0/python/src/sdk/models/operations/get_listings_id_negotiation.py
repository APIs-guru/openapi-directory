from dataclasses import dataclass, field
from typing import List


@dataclass
class GetListingsIDNegotiationPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingsIDNegotiationSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetListingsIDNegotiationRequest:
    path_params: GetListingsIDNegotiationPathParams = field(default=None)
    security: GetListingsIDNegotiationSecurity = field(default=None)
    

@dataclass
class GetListingsIDNegotiationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
