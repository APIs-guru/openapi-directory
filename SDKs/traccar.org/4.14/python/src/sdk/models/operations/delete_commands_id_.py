from dataclasses import dataclass, field



@dataclass
class DeleteCommandsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCommandsIDRequest:
    path_params: DeleteCommandsIDPathParams = field()
    

@dataclass
class DeleteCommandsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
