from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteShopVacationSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteShopVacationRequest:
    security: DeleteShopVacationSecurity = field()
    

@dataclass
class DeleteShopVacationResponse:
    content_type: str = field()
    status_code: int = field()
    
