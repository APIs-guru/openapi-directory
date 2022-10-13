from dataclasses import dataclass, field



@dataclass
class GetErrorsSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetErrorsRequest:
    security: GetErrorsSecurity = field(default=None)
    

@dataclass
class GetErrorsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
