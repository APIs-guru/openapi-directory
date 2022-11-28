from dataclasses import dataclass, field



@dataclass
class GetAdminRequestsRequestIDPathParams:
    request_id: str = field(metadata={'path_param': { 'field_name': 'requestId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdminRequestsRequestIDRequest:
    path_params: GetAdminRequestsRequestIDPathParams = field()
    

@dataclass
class GetAdminRequestsRequestIDResponse:
    content_type: str = field()
    status_code: int = field()
    
