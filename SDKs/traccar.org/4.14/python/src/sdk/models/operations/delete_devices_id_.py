from dataclasses import dataclass, field



@dataclass
class DeleteDevicesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDevicesIDRequest:
    path_params: DeleteDevicesIDPathParams = field(default=None)
    

@dataclass
class DeleteDevicesIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
