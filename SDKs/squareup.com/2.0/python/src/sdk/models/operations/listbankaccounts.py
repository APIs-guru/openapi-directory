from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListBankAccountsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'location_id', 'style': 'form', 'explode': True }})
    

@dataclass
class ListBankAccountsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListBankAccountsRequest:
    query_params: ListBankAccountsQueryParams = field(default=None)
    security: ListBankAccountsSecurity = field(default=None)
    

@dataclass
class ListBankAccountsResponse:
    content_type: str = field(default=None)
    list_bank_accounts_response: Optional[shared.ListBankAccountsResponse] = field(default=None)
    status_code: int = field(default=None)
    
