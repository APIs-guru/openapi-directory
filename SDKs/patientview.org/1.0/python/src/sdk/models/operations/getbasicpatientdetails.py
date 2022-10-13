from dataclasses import dataclass, field



@dataclass
class GetBasicPatientDetailsPathParams:
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBasicPatientDetailsRequest:
    path_params: GetBasicPatientDetailsPathParams = field(default=None)
    

@dataclass
class GetBasicPatientDetailsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
