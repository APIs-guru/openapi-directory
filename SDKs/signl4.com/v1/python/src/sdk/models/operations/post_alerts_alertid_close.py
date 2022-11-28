from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAlertsAlertIDClosePathParams:
    alert_id: str = field(metadata={'path_param': { 'field_name': 'alertId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAlertsAlertIDCloseRequests:
    change_alert_status_info: Optional[shared.ChangeAlertStatusInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    change_alert_status_info1: Optional[shared.ChangeAlertStatusInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    change_alert_status_info2: Optional[shared.ChangeAlertStatusInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    change_alert_status_info3: Optional[shared.ChangeAlertStatusInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAlertsAlertIDCloseRequest:
    path_params: PostAlertsAlertIDClosePathParams = field()
    request: Optional[PostAlertsAlertIDCloseRequests] = field(default=None)
    

@dataclass
class PostAlertsAlertIDCloseResponse:
    content_type: str = field()
    status_code: int = field()
    alert_info: Optional[shared.AlertInfo] = field(default=None)
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
