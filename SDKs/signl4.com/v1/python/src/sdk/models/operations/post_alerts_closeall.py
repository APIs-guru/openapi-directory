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
    query_params: PostAlertsCloseAllQueryParams = field(default=None)
    request: Optional[PostAlertsCloseAllRequests] = field(default=None)
    

@dataclass
class PostAlertsCloseAllResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    
