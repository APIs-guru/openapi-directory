from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAlertsRequests:
    raise_alert_info: Optional[shared.RaiseAlertInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    raise_alert_info1: Optional[shared.RaiseAlertInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    raise_alert_info2: Optional[shared.RaiseAlertInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    raise_alert_info3: Optional[shared.RaiseAlertInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAlertsRequest:
    request: Optional[PostAlertsRequests] = field(default=None)
    

@dataclass
class PostAlertsResponse:
    alert_info: Optional[shared.AlertInfo] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    
