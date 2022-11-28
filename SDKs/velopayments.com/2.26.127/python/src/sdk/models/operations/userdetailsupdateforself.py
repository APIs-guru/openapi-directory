from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UserDetailsUpdateForSelfRequest:
    request: shared.PayeeUserSelfUpdateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UserDetailsUpdateForSelfResponse:
    content_type: str = field()
    status_code: int = field()
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_409: Optional[Any] = field(default=None)
    
