from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAlertsAlertIDNotificationsPathParams:
    alert_id: str = field(metadata={'path_param': { 'field_name': 'alertId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAlertsAlertIDNotificationsRequest:
    path_params: GetAlertsAlertIDNotificationsPathParams = field()
    

@dataclass
class GetAlertsAlertIDNotificationsResponse:
    content_type: str = field()
    status_code: int = field()
    alert_notification_infos: Optional[List[shared.AlertNotificationInfo]] = field(default=None)
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
