from dataclasses import dataclass, field



@dataclass
class GetPatientEnteredObservationsByCodePathParams:
    code: str = field(default=None, metadata={'path_param': { 'field_name': 'code', 'style': 'simple', 'explode': False }})
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientEnteredObservationsByCodeRequest:
    path_params: GetPatientEnteredObservationsByCodePathParams = field(default=None)
    

@dataclass
class GetPatientEnteredObservationsByCodeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
