from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetFundingAccountsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payor_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    sensitive: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sensitive', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    source_account_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sourceAccountId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFundingAccountsRequest:
    query_params: GetFundingAccountsQueryParams = field(default=None)
    

@dataclass
class GetFundingAccountsResponse:
    content_type: str = field(default=None)
    list_funding_accounts_response: Optional[shared.ListFundingAccountsResponse] = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    
