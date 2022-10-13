from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DevicesPostRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    device_to_post: Optional[shared.DeviceToPost] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    device_to_post1: Optional[shared.DeviceToPost] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    device_to_post2: Optional[shared.DeviceToPost] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class DevicesPostRequest:
    request: DevicesPostRequests = field(default=None)
    

@dataclass
class DevicesPostResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    device_to_post: Optional[shared.DeviceToPost] = field(default=None)
    status_code: int = field(default=None)
    
