from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetShopVacationSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetShopVacationRequest:
    security: GetShopVacationSecurity = field()
    

@dataclass
class GetShopVacationResponse:
    content_type: str = field()
    status_code: int = field()
    
