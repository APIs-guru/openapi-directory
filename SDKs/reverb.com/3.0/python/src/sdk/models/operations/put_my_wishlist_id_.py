from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutMyWishlistIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutMyWishlistIDSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutMyWishlistIDRequest:
    path_params: PutMyWishlistIDPathParams = field()
    security: PutMyWishlistIDSecurity = field()
    

@dataclass
class PutMyWishlistIDResponse:
    content_type: str = field()
    status_code: int = field()
    
