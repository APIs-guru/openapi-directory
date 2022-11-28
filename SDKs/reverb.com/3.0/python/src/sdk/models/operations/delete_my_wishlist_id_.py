from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteMyWishlistIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMyWishlistIDSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteMyWishlistIDRequest:
    path_params: DeleteMyWishlistIDPathParams = field()
    security: DeleteMyWishlistIDSecurity = field()
    

@dataclass
class DeleteMyWishlistIDResponse:
    content_type: str = field()
    status_code: int = field()
    
