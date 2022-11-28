from dataclasses import dataclass, field



@dataclass
class DeleteAdminRequestsRequestIDPathParams:
    request_id: str = field(metadata={'path_param': { 'field_name': 'requestId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdminRequestsRequestIDRequest:
    path_params: DeleteAdminRequestsRequestIDPathParams = field()
    

@dataclass
class DeleteAdminRequestsRequestIDResponse:
    content_type: str = field()
    status_code: int = field()
    
