from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class MBusPostRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    m_bus_data: Optional[shared.MBusData] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    m_bus_data1: Optional[shared.MBusData] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    m_bus_data2: Optional[shared.MBusData] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class MBusPostRequest:
    request: MBusPostRequests = field()
    

@dataclass
class MBusPostResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    object: Optional[dict[str, Any]] = field(default=None)
    
