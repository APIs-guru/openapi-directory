from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteSwaggerPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSwaggerSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSwaggerRequest:
    path_params: DeleteSwaggerPathParams = field()
    security: DeleteSwaggerSecurity = field()
    

@dataclass
class DeleteSwaggerResponse:
    content_type: str = field()
    status_code: int = field()
    
