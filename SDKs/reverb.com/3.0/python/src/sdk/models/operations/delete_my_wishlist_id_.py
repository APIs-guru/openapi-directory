from dataclasses import dataclass, field



@dataclass
class DeleteMyWishlistIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMyWishlistIDSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteMyWishlistIDRequest:
    path_params: DeleteMyWishlistIDPathParams = field(default=None)
    security: DeleteMyWishlistIDSecurity = field(default=None)
    

@dataclass
class DeleteMyWishlistIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
