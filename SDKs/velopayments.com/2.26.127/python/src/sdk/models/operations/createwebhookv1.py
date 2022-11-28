from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreateWebhookV1Request:
    request: Optional[shared.CreateWebhookRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateWebhookV1Response:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    
