from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetSourceAccountV2PathParams:
    source_account_id: str = field(metadata={'path_param': { 'field_name': 'sourceAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSourceAccountV2Request:
    path_params: GetSourceAccountV2PathParams = field()
    

@dataclass
class GetSourceAccountV2Response:
    content_type: str = field()
    status_code: int = field()
    source_account_response_v2: Optional[shared.SourceAccountResponseV2] = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
