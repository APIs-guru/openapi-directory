from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RegisterForRealtimeAPIPostRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    register_realtime_api_data: Optional[shared.RegisterRealtimeAPIData] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    register_realtime_api_data1: Optional[shared.RegisterRealtimeAPIData] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    register_realtime_api_data2: Optional[shared.RegisterRealtimeAPIData] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class RegisterForRealtimeAPIPostRequest:
    request: RegisterForRealtimeAPIPostRequests = field()
    

@dataclass
class RegisterForRealtimeAPIPostResponse:
    content_type: str = field()
    status_code: int = field()
    
