from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyAccountSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyAccountRequest:
    security: GetMyAccountSecurity = field()
    

@dataclass
class GetMyAccountResponse:
    content_type: str = field()
    status_code: int = field()
    
