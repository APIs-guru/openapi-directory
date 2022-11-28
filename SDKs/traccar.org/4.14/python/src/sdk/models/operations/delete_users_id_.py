from dataclasses import dataclass, field



@dataclass
class DeleteUsersIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUsersIDRequest:
    path_params: DeleteUsersIDPathParams = field()
    

@dataclass
class DeleteUsersIDResponse:
    content_type: str = field()
    status_code: int = field()
    
