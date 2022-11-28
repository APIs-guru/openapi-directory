from dataclasses import dataclass, field



@dataclass
class DeleteCalendarsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCalendarsIDRequest:
    path_params: DeleteCalendarsIDPathParams = field()
    

@dataclass
class DeleteCalendarsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
