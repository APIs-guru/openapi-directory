from dataclasses import dataclass, field



@dataclass
class StatusQueryParams:
    msg_id: str = field(default=None, metadata={'query_param': { 'field_name': 'msg_id', 'style': 'form', 'explode': True }})
    

@dataclass
class StatusRequest:
    query_params: StatusQueryParams = field(default=None)
    

@dataclass
class StatusResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
