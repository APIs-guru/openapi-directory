from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateRequest:
    request: shared.UserCredential = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    token: Optional[shared.Token] = field(default=None)
    
