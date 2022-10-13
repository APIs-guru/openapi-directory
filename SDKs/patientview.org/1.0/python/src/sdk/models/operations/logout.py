from dataclasses import dataclass, field



@dataclass
class LogOutPathParams:
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class LogOutRequest:
    path_params: LogOutPathParams = field(default=None)
    

@dataclass
class LogOutResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
