from dataclasses import dataclass, field



@dataclass
class DeleteVcenterPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVcenterSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteVcenterRequest:
    path_params: DeleteVcenterPathParams = field(default=None)
    security: DeleteVcenterSecurity = field(default=None)
    

@dataclass
class DeleteVcenterResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
