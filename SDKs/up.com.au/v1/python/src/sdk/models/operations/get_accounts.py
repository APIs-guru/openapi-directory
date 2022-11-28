from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAccountsQueryParams:
    page_size_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page[size]', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountsRequest:
    query_params: GetAccountsQueryParams = field()
    

@dataclass
class GetAccountsResponse:
    content_type: str = field()
    status_code: int = field()
    list_accounts_response: Optional[shared.ListAccountsResponse] = field(default=None)
    
