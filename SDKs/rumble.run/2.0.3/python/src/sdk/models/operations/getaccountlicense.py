from dataclasses import dataclass, field



@dataclass
class GetAccountLicenseSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountLicenseRequest:
    security: GetAccountLicenseSecurity = field(default=None)
    

@dataclass
class GetAccountLicenseResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
