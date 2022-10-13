from dataclasses import dataclass, field



@dataclass
class RegisterForRealtimeAPIDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegisterForRealtimeAPIDeleteRequest:
    path_params: RegisterForRealtimeAPIDeletePathParams = field(default=None)
    

@dataclass
class RegisterForRealtimeAPIDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
