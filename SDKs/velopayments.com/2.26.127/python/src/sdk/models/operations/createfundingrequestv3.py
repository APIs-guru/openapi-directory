from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateFundingRequestV3PathParams:
    source_account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sourceAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFundingRequestV3Request:
    path_params: CreateFundingRequestV3PathParams = field(default=None)
    request: shared.FundingRequestV3 = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateFundingRequestV3Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
