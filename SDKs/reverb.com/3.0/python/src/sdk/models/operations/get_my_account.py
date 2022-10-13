from dataclasses import dataclass, field



@dataclass
class GetMyAccountSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyAccountRequest:
    security: GetMyAccountSecurity = field(default=None)
    

@dataclass
class GetMyAccountResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
