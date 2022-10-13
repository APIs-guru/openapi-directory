from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ObtainTokenRequest:
    request: shared.ObtainTokenRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ObtainTokenResponse:
    content_type: str = field(default=None)
    obtain_token_response: Optional[shared.ObtainTokenResponse] = field(default=None)
    status_code: int = field(default=None)
    
