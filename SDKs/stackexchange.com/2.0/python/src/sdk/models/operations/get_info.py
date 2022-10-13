from dataclasses import dataclass, field



@dataclass
class GetInfoQueryParams:
    site: str = field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInfoRequest:
    query_params: GetInfoQueryParams = field(default=None)
    

@dataclass
class GetInfoResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
