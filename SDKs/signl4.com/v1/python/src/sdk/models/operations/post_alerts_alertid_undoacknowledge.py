from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAlertsAlertIDUndoAcknowledgePathParams:
    alert_id: str = field(default=None, metadata={'path_param': { 'field_name': 'alertId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAlertsAlertIDUndoAcknowledgeRequests:
    change_alert_status_info: Optional[shared.ChangeAlertStatusInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    change_alert_status_info1: Optional[shared.ChangeAlertStatusInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    change_alert_status_info2: Optional[shared.ChangeAlertStatusInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    change_alert_status_info3: Optional[shared.ChangeAlertStatusInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAlertsAlertIDUndoAcknowledgeRequest:
    path_params: PostAlertsAlertIDUndoAcknowledgePathParams = field(default=None)
    request: Optional[PostAlertsAlertIDUndoAcknowledgeRequests] = field(default=None)
    

@dataclass
class PostAlertsAlertIDUndoAcknowledgeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    overview_alert: Optional[shared.OverviewAlert] = field(default=None)
    status_code: int = field(default=None)
    
