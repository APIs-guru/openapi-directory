from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetPayeesInvitationStatusV3PathParams:
    payor_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayeesInvitationStatusV3QueryParams:
    invitation_status: Optional[shared.InvitationStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'invitationStatus', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payee_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'payeeId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPayeesInvitationStatusV3Request:
    path_params: GetPayeesInvitationStatusV3PathParams = field(default=None)
    query_params: GetPayeesInvitationStatusV3QueryParams = field(default=None)
    

@dataclass
class GetPayeesInvitationStatusV3Response:
    content_type: str = field(default=None)
    paged_payee_invitation_status_response: Optional[shared.PagedPayeeInvitationStatusResponse] = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
