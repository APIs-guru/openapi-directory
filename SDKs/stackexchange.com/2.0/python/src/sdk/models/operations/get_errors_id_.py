from dataclasses import dataclass, field



@dataclass
class GetErrorsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetErrorsIDRequest:
    path_params: GetErrorsIDPathParams = field(default=None)
    

@dataclass
class GetErrorsIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
