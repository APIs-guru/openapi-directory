from dataclasses import dataclass, field



@dataclass
class GetSalesReverbSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSalesReverbRequest:
    security: GetSalesReverbSecurity = field(default=None)
    

@dataclass
class GetSalesReverbResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
