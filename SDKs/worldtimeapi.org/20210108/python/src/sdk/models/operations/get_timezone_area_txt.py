from dataclasses import dataclass, field



@dataclass
class GetTimezoneAreaTxtPathParams:
    area: str = field(default=None, metadata={'path_param': { 'field_name': 'area', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTimezoneAreaTxtRequest:
    path_params: GetTimezoneAreaTxtPathParams = field(default=None)
    

@dataclass
class GetTimezoneAreaTxtResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
