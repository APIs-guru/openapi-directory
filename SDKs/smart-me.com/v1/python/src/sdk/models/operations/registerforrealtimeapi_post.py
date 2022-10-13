from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RegisterForRealtimeAPIPostRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    register_realtime_api_data: Optional[shared.RegisterRealtimeAPIData] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    register_realtime_api_data1: Optional[shared.RegisterRealtimeAPIData] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    register_realtime_api_data2: Optional[shared.RegisterRealtimeAPIData] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class RegisterForRealtimeAPIPostRequest:
    request: RegisterForRealtimeAPIPostRequests = field(default=None)
    

@dataclass
class RegisterForRealtimeAPIPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
