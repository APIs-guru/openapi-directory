from dataclasses import dataclass, field



@dataclass
class PutMyWishlistIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutMyWishlistIDSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutMyWishlistIDRequest:
    path_params: PutMyWishlistIDPathParams = field(default=None)
    security: PutMyWishlistIDSecurity = field(default=None)
    

@dataclass
class PutMyWishlistIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
