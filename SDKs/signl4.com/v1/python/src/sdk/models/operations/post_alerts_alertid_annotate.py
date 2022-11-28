from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAlertsAlertIDAnnotatePathParams:
    alert_id: str = field(metadata={'path_param': { 'field_name': 'alertId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAlertsAlertIDAnnotateRequests:
    alert_annotation_info: Optional[shared.AlertAnnotationInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    alert_annotation_info1: Optional[shared.AlertAnnotationInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    alert_annotation_info2: Optional[shared.AlertAnnotationInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    alert_annotation_info3: Optional[shared.AlertAnnotationInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAlertsAlertIDAnnotateRequest:
    path_params: PostAlertsAlertIDAnnotatePathParams = field()
    request: Optional[PostAlertsAlertIDAnnotateRequests] = field(default=None)
    

@dataclass
class PostAlertsAlertIDAnnotateResponse:
    content_type: str = field()
    status_code: int = field()
    alert_annotation_info: Optional[shared.AlertAnnotationInfo] = field(default=None)
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
