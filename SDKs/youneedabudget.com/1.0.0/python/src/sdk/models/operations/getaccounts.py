from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAccountsPathParams:
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsQueryParams:
    last_knowledge_of_server: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'last_knowledge_of_server', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountsRequest:
    path_params: GetAccountsPathParams = field()
    query_params: GetAccountsQueryParams = field()
    

@dataclass
class GetAccountsResponse:
    content_type: str = field()
    status_code: int = field()
    accounts_response: Optional[shared.AccountsResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
