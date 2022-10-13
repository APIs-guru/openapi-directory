from dataclasses import dataclass, field



@dataclass
class GetTimezoneAreaLocationTxtPathParams:
    area: str = field(default=None, metadata={'path_param': { 'field_name': 'area', 'style': 'simple', 'explode': False }})
    location: str = field(default=None, metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTimezoneAreaLocationTxtRequest:
    path_params: GetTimezoneAreaLocationTxtPathParams = field(default=None)
    

@dataclass
class GetTimezoneAreaLocationTxtResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
