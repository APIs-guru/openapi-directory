from dataclasses import dataclass, field



@dataclass
class FastSendDeviceValuesGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FastSendDeviceValuesGetRequest:
    path_params: FastSendDeviceValuesGetPathParams = field(default=None)
    

@dataclass
class FastSendDeviceValuesGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
