from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutWantsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutWantsIDSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutWantsIDRequest:
    path_params: PutWantsIDPathParams = field()
    security: PutWantsIDSecurity = field()
    

@dataclass
class PutWantsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
