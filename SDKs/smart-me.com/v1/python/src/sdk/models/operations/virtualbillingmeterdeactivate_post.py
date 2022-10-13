from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class VirtualBillingMeterDeactivatePostRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    v_meter_to_deactivate: Optional[shared.VMeterToDeactivate] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    v_meter_to_deactivate1: Optional[shared.VMeterToDeactivate] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    v_meter_to_deactivate2: Optional[shared.VMeterToDeactivate] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class VirtualBillingMeterDeactivatePostRequest:
    request: VirtualBillingMeterDeactivatePostRequests = field(default=None)
    

@dataclass
class VirtualBillingMeterDeactivatePostResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
