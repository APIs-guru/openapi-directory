from dataclasses import dataclass, field



@dataclass
class RemoveKeySecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RemoveKeyRequest:
    security: RemoveKeySecurity = field(default=None)
    

@dataclass
class RemoveKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
