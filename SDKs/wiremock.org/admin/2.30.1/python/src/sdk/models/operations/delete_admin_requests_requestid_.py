from dataclasses import dataclass, field



@dataclass
class DeleteAdminRequestsRequestIDPathParams:
    request_id: str = field(default=None, metadata={'path_param': { 'field_name': 'requestId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdminRequestsRequestIDRequest:
    path_params: DeleteAdminRequestsRequestIDPathParams = field(default=None)
    

@dataclass
class DeleteAdminRequestsRequestIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
