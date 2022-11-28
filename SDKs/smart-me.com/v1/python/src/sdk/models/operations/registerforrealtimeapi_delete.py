from dataclasses import dataclass, field



@dataclass
class RegisterForRealtimeAPIDeletePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegisterForRealtimeAPIDeleteRequest:
    path_params: RegisterForRealtimeAPIDeletePathParams = field()
    

@dataclass
class RegisterForRealtimeAPIDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
