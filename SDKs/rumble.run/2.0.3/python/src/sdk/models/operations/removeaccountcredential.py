from dataclasses import dataclass, field



@dataclass
class RemoveAccountCredentialPathParams:
    credential_id: str = field(default=None, metadata={'path_param': { 'field_name': 'credential_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveAccountCredentialSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RemoveAccountCredentialRequest:
    path_params: RemoveAccountCredentialPathParams = field(default=None)
    security: RemoveAccountCredentialSecurity = field(default=None)
    

@dataclass
class RemoveAccountCredentialResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
