from dataclasses import dataclass, field



@dataclass
class DeleteNotificationsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNotificationsIDRequest:
    path_params: DeleteNotificationsIDPathParams = field(default=None)
    

@dataclass
class DeleteNotificationsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
