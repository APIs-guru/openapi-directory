from dataclasses import dataclass, field



@dataclass
class DeleteGeofencesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGeofencesIDRequest:
    path_params: DeleteGeofencesIDPathParams = field(default=None)
    

@dataclass
class DeleteGeofencesIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
