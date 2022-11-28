from dataclasses import dataclass, field



@dataclass
class DeleteMaintenanceIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMaintenanceIDRequest:
    path_params: DeleteMaintenanceIDPathParams = field()
    

@dataclass
class DeleteMaintenanceIDResponse:
    content_type: str = field()
    status_code: int = field()
    
