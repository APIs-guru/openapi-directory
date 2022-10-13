from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAlertsAlertIDAcknowledgePathParams:
    alert_id: str = field(default=None, metadata={'path_param': { 'field_name': 'alertId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAlertsAlertIDAcknowledgeRequests:
    change_alert_status_info: Optional[shared.ChangeAlertStatusInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    change_alert_status_info1: Optional[shared.ChangeAlertStatusInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    change_alert_status_info2: Optional[shared.ChangeAlertStatusInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    change_alert_status_info3: Optional[shared.ChangeAlertStatusInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAlertsAlertIDAcknowledgeRequest:
    path_params: PostAlertsAlertIDAcknowledgePathParams = field(default=None)
    request: Optional[PostAlertsAlertIDAcknowledgeRequests] = field(default=None)
    

@dataclass
class PostAlertsAlertIDAcknowledgeResponse:
    alert_info: Optional[shared.AlertInfo] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    
