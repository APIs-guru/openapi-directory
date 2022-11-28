from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetFundingAccountV2PathParams:
    funding_account_id: str = field(metadata={'path_param': { 'field_name': 'fundingAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFundingAccountV2QueryParams:
    sensitive: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sensitive', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFundingAccountV2Request:
    path_params: GetFundingAccountV2PathParams = field()
    query_params: GetFundingAccountV2QueryParams = field()
    

@dataclass
class GetFundingAccountV2Response:
    content_type: str = field()
    status_code: int = field()
    funding_account_response_2: Optional[shared.FundingAccountResponse2] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
