from dataclasses import dataclass, field



@dataclass
class GetVersionsSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetVersionsRequest:
    security: GetVersionsSecurity = field(default=None)
    

@dataclass
class GetVersionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
