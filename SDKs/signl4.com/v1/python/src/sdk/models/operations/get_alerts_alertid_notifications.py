from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAlertsAlertIDNotificationsPathParams:
    alert_id: str = field(default=None, metadata={'path_param': { 'field_name': 'alertId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAlertsAlertIDNotificationsRequest:
    path_params: GetAlertsAlertIDNotificationsPathParams = field(default=None)
    

@dataclass
class GetAlertsAlertIDNotificationsResponse:
    alert_notification_infos: Optional[List[shared.AlertNotificationInfo]] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    
