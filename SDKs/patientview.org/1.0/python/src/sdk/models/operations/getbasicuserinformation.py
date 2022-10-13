from dataclasses import dataclass, field



@dataclass
class GetBasicUserInformationPathParams:
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBasicUserInformationRequest:
    path_params: GetBasicUserInformationPathParams = field(default=None)
    

@dataclass
class GetBasicUserInformationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
