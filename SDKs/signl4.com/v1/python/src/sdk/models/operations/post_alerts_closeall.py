from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAlertsCloseAllQueryParams:
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAlertsCloseAllRequests:
    change_alert_status_filter_info: Optional[shared.ChangeAlertStatusFilterInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    change_alert_status_filter_info1: Optional[shared.ChangeAlertStatusFilterInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    change_alert_status_filter_info2: Optional[shared.ChangeAlertStatusFilterInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    change_alert_status_filter_info3: Optional[shared.ChangeAlertStatusFilterInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAlertsCloseAllRequest:
    query_params: PostAlertsCloseAllQueryParams = field()
    request: Optional[PostAlertsCloseAllRequests] = field(default=None)
    

@dataclass
class PostAlertsCloseAllResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
