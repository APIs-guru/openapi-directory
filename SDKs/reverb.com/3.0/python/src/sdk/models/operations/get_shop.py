from dataclasses import dataclass, field



@dataclass
class GetShopSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetShopRequest:
    security: GetShopSecurity = field(default=None)
    

@dataclass
class GetShopResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
