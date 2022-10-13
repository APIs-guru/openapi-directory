from dataclasses import dataclass, field



@dataclass
class DeleteCommandsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCommandsIDRequest:
    path_params: DeleteCommandsIDPathParams = field(default=None)
    

@dataclass
class DeleteCommandsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
