from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ShowServiceInstancePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ShowServiceInstanceRequest:
    path_params: ShowServiceInstancePathParams = field(default=None)
    

@dataclass
class ShowServiceInstanceResponse:
    content_type: str = field(default=None)
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    service_instance: Optional[shared.ServiceInstance] = field(default=None)
    status_code: int = field(default=None)
    
