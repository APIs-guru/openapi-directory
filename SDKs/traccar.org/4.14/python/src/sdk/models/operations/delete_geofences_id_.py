from dataclasses import dataclass, field



@dataclass
class DeleteGeofencesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGeofencesIDRequest:
    path_params: DeleteGeofencesIDPathParams = field()
    

@dataclass
class DeleteGeofencesIDResponse:
    content_type: str = field()
    status_code: int = field()
    
