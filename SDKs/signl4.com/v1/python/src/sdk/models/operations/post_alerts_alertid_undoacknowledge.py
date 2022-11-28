from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAlertsAlertIDUndoAcknowledgePathParams:
    alert_id: str = field(metadata={'path_param': { 'field_name': 'alertId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAlertsAlertIDUndoAcknowledgeRequests:
    change_alert_status_info: Optional[shared.ChangeAlertStatusInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    change_alert_status_info1: Optional[shared.ChangeAlertStatusInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    change_alert_status_info2: Optional[shared.ChangeAlertStatusInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    change_alert_status_info3: Optional[shared.ChangeAlertStatusInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAlertsAlertIDUndoAcknowledgeRequest:
    path_params: PostAlertsAlertIDUndoAcknowledgePathParams = field()
    request: Optional[PostAlertsAlertIDUndoAcknowledgeRequests] = field(default=None)
    

@dataclass
class PostAlertsAlertIDUndoAcknowledgeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    overview_alert: Optional[shared.OverviewAlert] = field(default=None)
    
