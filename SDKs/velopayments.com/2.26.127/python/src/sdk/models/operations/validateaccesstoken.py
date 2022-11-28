from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ValidateAccessTokenHeaders:
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class ValidateAccessTokenRequest:
    headers: ValidateAccessTokenHeaders = field()
    request: shared.AccessTokenValidationRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ValidateAccessTokenResponse:
    content_type: str = field()
    status_code: int = field()
    access_token_response: Optional[shared.AccessTokenResponse] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    
