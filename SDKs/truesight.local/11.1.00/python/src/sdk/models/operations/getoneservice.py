from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetOneServicePathParams:
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOneServiceRequest:
    path_params: GetOneServicePathParams = field()
    

@dataclass
class GetOneServiceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
