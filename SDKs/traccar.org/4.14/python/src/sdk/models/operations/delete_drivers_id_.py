from dataclasses import dataclass, field



@dataclass
class DeleteDriversIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDriversIDRequest:
    path_params: DeleteDriversIDPathParams = field()
    

@dataclass
class DeleteDriversIDResponse:
    content_type: str = field()
    status_code: int = field()
    
