from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetFundingAccountV2PathParams:
    funding_account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'fundingAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFundingAccountV2QueryParams:
    sensitive: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sensitive', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFundingAccountV2Request:
    path_params: GetFundingAccountV2PathParams = field(default=None)
    query_params: GetFundingAccountV2QueryParams = field(default=None)
    

@dataclass
class GetFundingAccountV2Response:
    content_type: str = field(default=None)
    funding_account_response_2: Optional[shared.FundingAccountResponse2] = field(default=None)
    status_code: int = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
