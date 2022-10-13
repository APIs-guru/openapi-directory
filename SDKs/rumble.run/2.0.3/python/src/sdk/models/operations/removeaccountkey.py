from dataclasses import dataclass, field



@dataclass
class RemoveAccountKeyPathParams:
    key_id: str = field(default=None, metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveAccountKeySecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RemoveAccountKeyRequest:
    path_params: RemoveAccountKeyPathParams = field(default=None)
    security: RemoveAccountKeySecurity = field(default=None)
    

@dataclass
class RemoveAccountKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
