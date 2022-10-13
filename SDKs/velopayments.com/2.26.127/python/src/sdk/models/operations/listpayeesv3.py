from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListPayeesV3QueryParams:
    disabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'disabled', 'style': 'form', 'explode': True }})
    display_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'displayName', 'style': 'form', 'explode': True }})
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    onboarded_status: Optional[shared.OnboardedStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'onboardedStatus', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payee_country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'payeeCountry', 'style': 'form', 'explode': True }})
    payee_type: Optional[shared.PayeeTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'payeeType', 'style': 'form', 'explode': True }})
    payor_id: str = field(default=None, metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    remote_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'remoteId', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    watchlist_status: Optional[shared.WatchlistStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'watchlistStatus', 'style': 'form', 'explode': True }})
    

@dataclass
class ListPayeesV3Request:
    query_params: ListPayeesV3QueryParams = field(default=None)
    

@dataclass
class ListPayeesV3Response:
    content_type: str = field(default=None)
    paged_payee_response: Optional[shared.PagedPayeeResponse] = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
