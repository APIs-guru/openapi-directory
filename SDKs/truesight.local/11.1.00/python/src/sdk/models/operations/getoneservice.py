from dataclasses import dataclass, field



@dataclass
class GetOneServicePathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOneServiceRequest:
    path_params: GetOneServicePathParams = field(default=None)
    

@dataclass
class GetOneServiceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
