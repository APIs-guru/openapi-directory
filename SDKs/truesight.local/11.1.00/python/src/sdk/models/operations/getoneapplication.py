from dataclasses import dataclass, field



@dataclass
class GetOneApplicationPathParams:
    application_id: str = field(default=None, metadata={'path_param': { 'field_name': 'applicationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOneApplicationRequest:
    path_params: GetOneApplicationPathParams = field(default=None)
    

@dataclass
class GetOneApplicationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
