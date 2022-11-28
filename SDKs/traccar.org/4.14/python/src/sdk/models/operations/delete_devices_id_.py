from dataclasses import dataclass, field



@dataclass
class DeleteDevicesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDevicesIDRequest:
    path_params: DeleteDevicesIDPathParams = field()
    

@dataclass
class DeleteDevicesIDResponse:
    content_type: str = field()
    status_code: int = field()
    
