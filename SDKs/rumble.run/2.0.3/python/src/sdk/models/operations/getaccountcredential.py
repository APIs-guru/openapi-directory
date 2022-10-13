from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAccountCredentialPathParams:
    credential_id: str = field(default=None, metadata={'path_param': { 'field_name': 'credential_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountCredentialSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountCredentialRequest:
    path_params: GetAccountCredentialPathParams = field(default=None)
    security: GetAccountCredentialSecurity = field(default=None)
    

@dataclass
class GetAccountCredentialResponse:
    content_type: str = field(default=None)
    credential: Optional[shared.Credential] = field(default=None)
    status_code: int = field(default=None)
    
