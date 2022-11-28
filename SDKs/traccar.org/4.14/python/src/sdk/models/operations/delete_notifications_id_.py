from dataclasses import dataclass, field



@dataclass
class DeleteNotificationsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNotificationsIDRequest:
    path_params: DeleteNotificationsIDPathParams = field()
    

@dataclass
class DeleteNotificationsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
