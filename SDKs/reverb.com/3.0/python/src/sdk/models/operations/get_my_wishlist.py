from dataclasses import dataclass, field



@dataclass
class GetMyWishlistSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyWishlistRequest:
    security: GetMyWishlistSecurity = field(default=None)
    

@dataclass
class GetMyWishlistResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
