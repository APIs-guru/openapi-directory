from dataclasses import dataclass, field



@dataclass
class DeleteMaintenanceIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMaintenanceIDRequest:
    path_params: DeleteMaintenanceIDPathParams = field(default=None)
    

@dataclass
class DeleteMaintenanceIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
