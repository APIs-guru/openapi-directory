from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountsQueryParams:
    page_size_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page[size]', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountsRequest:
    query_params: GetAccountsQueryParams = field(default=None)
    

@dataclass
class GetAccountsResponse:
    content_type: str = field(default=None)
    list_accounts_response: Optional[shared.ListAccountsResponse] = field(default=None)
    status_code: int = field(default=None)
    
