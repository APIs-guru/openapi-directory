from dataclasses import dataclass, field



@dataclass
class GetAccountKeyPathParams:
    key_id: str = field(default=None, metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountKeySecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountKeyRequest:
    path_params: GetAccountKeyPathParams = field(default=None)
    security: GetAccountKeySecurity = field(default=None)
    

@dataclass
class GetAccountKeyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
