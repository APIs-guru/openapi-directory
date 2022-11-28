from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostShopVacationSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostShopVacationRequest:
    security: PostShopVacationSecurity = field()
    

@dataclass
class PostShopVacationResponse:
    content_type: str = field()
    status_code: int = field()
    
