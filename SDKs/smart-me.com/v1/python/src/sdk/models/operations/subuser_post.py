from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubUserPostRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    sub_user_data: Optional[shared.SubUserData] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    sub_user_data1: Optional[shared.SubUserData] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    sub_user_data2: Optional[shared.SubUserData] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SubUserPostRequest:
    request: SubUserPostRequests = field()
    

@dataclass
class SubUserPostResponse:
    content_type: str = field()
    status_code: int = field()
    
