from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAlertsAlertIDAttachmentsPathParams:
    alert_id: str = field(default=None, metadata={'path_param': { 'field_name': 'alertId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAlertsAlertIDAttachmentsRequest:
    path_params: GetAlertsAlertIDAttachmentsPathParams = field(default=None)
    

@dataclass
class GetAlertsAlertIDAttachmentsResponse:
    alert_attachment_infos: Optional[List[shared.AlertAttachmentInfo]] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    
