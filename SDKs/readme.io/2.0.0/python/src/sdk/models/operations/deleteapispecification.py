from dataclasses import dataclass, field



@dataclass
class DeleteAPISpecificationPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAPISpecificationSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteAPISpecificationRequest:
    path_params: DeleteAPISpecificationPathParams = field(default=None)
    security: DeleteAPISpecificationSecurity = field(default=None)
    

@dataclass
class DeleteAPISpecificationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
