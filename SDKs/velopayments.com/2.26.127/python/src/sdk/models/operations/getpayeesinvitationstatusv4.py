from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetPayeesInvitationStatusV4PathParams:
    payor_id: str = field(metadata={'path_param': { 'field_name': 'payorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayeesInvitationStatusV4QueryParams:
    invitation_status: Optional[shared.InvitationStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'invitationStatus', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payee_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'payeeId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPayeesInvitationStatusV4Request:
    path_params: GetPayeesInvitationStatusV4PathParams = field()
    query_params: GetPayeesInvitationStatusV4QueryParams = field()
    

@dataclass
class GetPayeesInvitationStatusV4Response:
    content_type: str = field()
    status_code: int = field()
    paged_payee_invitation_status_response_2: Optional[shared.PagedPayeeInvitationStatusResponse2] = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
