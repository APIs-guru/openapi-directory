from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAlertsUndoCloseMultipleRequests:
    change_alert_status_multiple_info: Optional[shared.ChangeAlertStatusMultipleInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    change_alert_status_multiple_info1: Optional[shared.ChangeAlertStatusMultipleInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    change_alert_status_multiple_info2: Optional[shared.ChangeAlertStatusMultipleInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    change_alert_status_multiple_info3: Optional[shared.ChangeAlertStatusMultipleInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAlertsUndoCloseMultipleRequest:
    request: Optional[PostAlertsUndoCloseMultipleRequests] = field(default=None)
    

@dataclass
class PostAlertsUndoCloseMultipleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    
