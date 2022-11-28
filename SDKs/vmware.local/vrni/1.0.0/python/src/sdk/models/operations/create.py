from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateRequest:
    request: shared.UserCredential = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    token: Optional[shared.Token] = field(default=None)
    
