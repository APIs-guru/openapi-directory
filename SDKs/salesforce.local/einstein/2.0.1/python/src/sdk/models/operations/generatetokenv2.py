from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class GenerateTokenV2RequestBodyGrantTypeEnum(str, Enum):
    URN_IETF_PARAMS_OAUTH_GRANT_TYPE_JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer"
    REFRESH_TOKEN = "refresh_token"


@dataclass
class GenerateTokenV2RequestBody:
    assertion: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'assertion' }})
    grant_type: Optional[GenerateTokenV2RequestBodyGrantTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'grant_type' }})
    refresh_token: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'refresh_token' }})
    scope: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'scope' }})
    valid_for: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'valid_for' }})
    

@dataclass
class GenerateTokenV2Request:
    request: Optional[GenerateTokenV2RequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class GenerateTokenV2Response:
    content_type: str = field()
    status_code: int = field()
    generate_access_token_response: Optional[shared.GenerateAccessTokenResponse] = field(default=None)
    
