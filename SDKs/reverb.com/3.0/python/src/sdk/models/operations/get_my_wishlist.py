from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyWishlistSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyWishlistRequest:
    security: GetMyWishlistSecurity = field()
    

@dataclass
class GetMyWishlistResponse:
    content_type: str = field()
    status_code: int = field()
    
