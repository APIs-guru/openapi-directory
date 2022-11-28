from dataclasses import dataclass, field



@dataclass
class LogOutPathParams:
    token: str = field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class LogOutRequest:
    path_params: LogOutPathParams = field()
    

@dataclass
class LogOutResponse:
    content_type: str = field()
    status_code: int = field()
    
