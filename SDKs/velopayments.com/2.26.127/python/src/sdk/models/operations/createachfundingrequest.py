from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateAchFundingRequestPathParams:
    source_account_id: str = field(metadata={'path_param': { 'field_name': 'sourceAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAchFundingRequestRequest:
    path_params: CreateAchFundingRequestPathParams = field()
    request: shared.FundingRequestV1 = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAchFundingRequestResponse:
    content_type: str = field()
    status_code: int = field()
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
