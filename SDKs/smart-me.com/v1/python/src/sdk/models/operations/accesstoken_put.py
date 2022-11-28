from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccessTokenPutRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    access_token_to_put: Optional[shared.AccessTokenToPut] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    access_token_to_put1: Optional[shared.AccessTokenToPut] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    access_token_to_put2: Optional[shared.AccessTokenToPut] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AccessTokenPutRequest:
    request: AccessTokenPutRequests = field()
    

@dataclass
class AccessTokenPutResponse:
    content_type: str = field()
    status_code: int = field()
    access_token_put_200_application_json_string: Optional[str] = field(default=None)
    access_token_put_200_application_xml_string: Optional[str] = field(default=None)
    access_token_put_200_text_json_string: Optional[str] = field(default=None)
    access_token_put_200_text_xml_string: Optional[str] = field(default=None)
    
