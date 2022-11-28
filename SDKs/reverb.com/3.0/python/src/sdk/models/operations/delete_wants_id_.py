from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteWantsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWantsIDSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteWantsIDRequest:
    path_params: DeleteWantsIDPathParams = field()
    security: DeleteWantsIDSecurity = field()
    

@dataclass
class DeleteWantsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
