from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreateFundingAccountV2Request:
    request: Optional[shared.CreateFundingAccountRequestV2] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateFundingAccountV2Response:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    
