from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetSalesReverbSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSalesReverbRequest:
    security: GetSalesReverbSecurity = field()
    

@dataclass
class GetSalesReverbResponse:
    content_type: str = field()
    status_code: int = field()
    
