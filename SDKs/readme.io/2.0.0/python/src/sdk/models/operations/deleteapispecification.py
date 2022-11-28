from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteAPISpecificationPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAPISpecificationSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteAPISpecificationRequest:
    path_params: DeleteAPISpecificationPathParams = field()
    security: DeleteAPISpecificationSecurity = field()
    

@dataclass
class DeleteAPISpecificationResponse:
    content_type: str = field()
    status_code: int = field()
    
