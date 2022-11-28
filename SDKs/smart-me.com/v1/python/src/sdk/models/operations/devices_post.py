from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DevicesPostRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    device_to_post: Optional[shared.DeviceToPost] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    device_to_post1: Optional[shared.DeviceToPost] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    device_to_post2: Optional[shared.DeviceToPost] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class DevicesPostRequest:
    request: DevicesPostRequests = field()
    

@dataclass
class DevicesPostResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    device_to_post: Optional[shared.DeviceToPost] = field(default=None)
    
