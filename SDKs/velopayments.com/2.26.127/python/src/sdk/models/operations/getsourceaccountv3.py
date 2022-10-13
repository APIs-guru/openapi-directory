from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetSourceAccountV3PathParams:
    source_account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sourceAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSourceAccountV3Request:
    path_params: GetSourceAccountV3PathParams = field(default=None)
    

@dataclass
class GetSourceAccountV3Response:
    content_type: str = field(default=None)
    source_account_response_v3: Optional[shared.SourceAccountResponseV3] = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
