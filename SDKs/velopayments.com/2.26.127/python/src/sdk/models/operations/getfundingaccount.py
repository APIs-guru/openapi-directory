from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetFundingAccountPathParams:
    funding_account_id: str = field(metadata={'path_param': { 'field_name': 'fundingAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFundingAccountQueryParams:
    sensitive: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sensitive', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFundingAccountRequest:
    path_params: GetFundingAccountPathParams = field()
    query_params: GetFundingAccountQueryParams = field()
    

@dataclass
class GetFundingAccountResponse:
    content_type: str = field()
    status_code: int = field()
    funding_account_response: Optional[shared.FundingAccountResponse] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
