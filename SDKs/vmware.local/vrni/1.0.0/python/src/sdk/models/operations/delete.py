from dataclasses import dataclass, field



@dataclass
class DeleteSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteRequest:
    security: DeleteSecurity = field(default=None)
    

@dataclass
class DeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
