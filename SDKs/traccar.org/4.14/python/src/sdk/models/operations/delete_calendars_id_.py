from dataclasses import dataclass, field



@dataclass
class DeleteCalendarsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCalendarsIDRequest:
    path_params: DeleteCalendarsIDPathParams = field(default=None)
    

@dataclass
class DeleteCalendarsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
