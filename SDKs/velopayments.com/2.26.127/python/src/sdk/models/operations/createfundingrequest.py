from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateFundingRequestPathParams:
    source_account_id: str = field(metadata={'path_param': { 'field_name': 'sourceAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFundingRequestRequest:
    path_params: CreateFundingRequestPathParams = field()
    request: shared.FundingRequestV2 = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateFundingRequestResponse:
    content_type: str = field()
    status_code: int = field()
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
