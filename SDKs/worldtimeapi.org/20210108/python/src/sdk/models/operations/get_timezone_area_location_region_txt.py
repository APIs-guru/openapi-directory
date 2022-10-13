from dataclasses import dataclass, field



@dataclass
class GetTimezoneAreaLocationRegionTxtPathParams:
    area: str = field(default=None, metadata={'path_param': { 'field_name': 'area', 'style': 'simple', 'explode': False }})
    location: str = field(default=None, metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    region: str = field(default=None, metadata={'path_param': { 'field_name': 'region', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTimezoneAreaLocationRegionTxtRequest:
    path_params: GetTimezoneAreaLocationRegionTxtPathParams = field(default=None)
    

@dataclass
class GetTimezoneAreaLocationRegionTxtResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
