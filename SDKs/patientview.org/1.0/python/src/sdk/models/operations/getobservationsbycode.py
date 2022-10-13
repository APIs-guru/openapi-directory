from dataclasses import dataclass, field



@dataclass
class GetObservationsByCodePathParams:
    code: str = field(default=None, metadata={'path_param': { 'field_name': 'code', 'style': 'simple', 'explode': False }})
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetObservationsByCodeRequest:
    path_params: GetObservationsByCodePathParams = field(default=None)
    

@dataclass
class GetObservationsByCodeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
