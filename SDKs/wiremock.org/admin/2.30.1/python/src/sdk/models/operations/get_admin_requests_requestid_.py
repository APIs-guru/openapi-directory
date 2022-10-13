from dataclasses import dataclass, field



@dataclass
class GetAdminRequestsRequestIDPathParams:
    request_id: str = field(default=None, metadata={'path_param': { 'field_name': 'requestId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdminRequestsRequestIDRequest:
    path_params: GetAdminRequestsRequestIDPathParams = field(default=None)
    

@dataclass
class GetAdminRequestsRequestIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
