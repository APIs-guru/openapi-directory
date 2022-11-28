from dataclasses import dataclass, field



@dataclass
class FastSendDeviceValuesGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FastSendDeviceValuesGetRequest:
    path_params: FastSendDeviceValuesGetPathParams = field()
    

@dataclass
class FastSendDeviceValuesGetResponse:
    content_type: str = field()
    status_code: int = field()
    
