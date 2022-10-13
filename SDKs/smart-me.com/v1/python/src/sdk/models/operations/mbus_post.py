from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class MBusPostRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    m_bus_data: Optional[shared.MBusData] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    m_bus_data1: Optional[shared.MBusData] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    m_bus_data2: Optional[shared.MBusData] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class MBusPostRequest:
    request: MBusPostRequests = field(default=None)
    

@dataclass
class MBusPostResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
