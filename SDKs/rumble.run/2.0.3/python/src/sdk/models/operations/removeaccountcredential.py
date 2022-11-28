from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class RemoveAccountCredentialPathParams:
    credential_id: str = field(metadata={'path_param': { 'field_name': 'credential_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveAccountCredentialSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RemoveAccountCredentialRequest:
    path_params: RemoveAccountCredentialPathParams = field()
    security: RemoveAccountCredentialSecurity = field()
    

@dataclass
class RemoveAccountCredentialResponse:
    content_type: str = field()
    status_code: int = field()
    
