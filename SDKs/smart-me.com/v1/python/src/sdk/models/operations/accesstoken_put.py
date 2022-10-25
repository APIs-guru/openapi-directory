from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccessTokenPutRequests:
    access_token_to_put: Optional[shared.AccessTokenToPut] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    access_token_to_put1: Optional[shared.AccessTokenToPut] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    access_token_to_put2: Optional[shared.AccessTokenToPut] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class AccessTokenPutRequest:
    request: AccessTokenPutRequests = field(default=None)
    

@dataclass
class AccessTokenPutResponse:
    access_token_put_200_application_json_string: Optional[str] = field(default=None)
    access_token_put_200_application_xml_string: Optional[str] = field(default=None)
    access_token_put_200_text_json_string: Optional[str] = field(default=None)
    access_token_put_200_text_xml_string: Optional[str] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
