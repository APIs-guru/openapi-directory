from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetShopSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetShopRequest:
    security: GetShopSecurity = field()
    

@dataclass
class GetShopResponse:
    content_type: str = field()
    status_code: int = field()
    
