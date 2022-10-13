from dataclasses import dataclass, field



@dataclass
class GetShopVacationSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetShopVacationRequest:
    security: GetShopVacationSecurity = field(default=None)
    

@dataclass
class GetShopVacationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
