from dataclasses import dataclass, field



@dataclass
class DeleteDriversIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDriversIDRequest:
    path_params: DeleteDriversIDPathParams = field(default=None)
    

@dataclass
class DeleteDriversIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
