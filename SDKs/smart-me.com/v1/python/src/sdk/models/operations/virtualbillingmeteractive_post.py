from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualBillingMeterActivePostRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    v_meter_to_activate: Optional[shared.VMeterToActivate] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    v_meter_to_activate1: Optional[shared.VMeterToActivate] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    v_meter_to_activate2: Optional[shared.VMeterToActivate] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class VirtualBillingMeterActivePostRequest:
    request: VirtualBillingMeterActivePostRequests = field()
    

@dataclass
class VirtualBillingMeterActivePostResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    device: Optional[shared.Device] = field(default=None)
    
