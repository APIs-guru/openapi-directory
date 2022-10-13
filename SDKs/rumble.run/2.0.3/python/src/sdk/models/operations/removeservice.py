from dataclasses import dataclass, field



@dataclass
class RemoveServicePathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'service_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveServiceSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RemoveServiceRequest:
    path_params: RemoveServicePathParams = field(default=None)
    security: RemoveServiceSecurity = field(default=None)
    

@dataclass
class RemoveServiceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
