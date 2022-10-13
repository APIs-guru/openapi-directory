from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubUserPostRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    sub_user_data: Optional[shared.SubUserData] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    sub_user_data1: Optional[shared.SubUserData] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    sub_user_data2: Optional[shared.SubUserData] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class SubUserPostRequest:
    request: SubUserPostRequests = field(default=None)
    

@dataclass
class SubUserPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
