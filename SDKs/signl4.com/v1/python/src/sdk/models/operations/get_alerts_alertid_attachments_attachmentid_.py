from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAlertsAlertIDAttachmentsAttachmentIDPathParams:
    alert_id: str = field(default=None, metadata={'path_param': { 'field_name': 'alertId', 'style': 'simple', 'explode': False }})
    attachment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'attachmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAlertsAlertIDAttachmentsAttachmentIDQueryParams:
    height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    scale: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'scale', 'style': 'form', 'explode': True }})
    width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAlertsAlertIDAttachmentsAttachmentIDRequest:
    path_params: GetAlertsAlertIDAttachmentsAttachmentIDPathParams = field(default=None)
    query_params: GetAlertsAlertIDAttachmentsAttachmentIDQueryParams = field(default=None)
    

@dataclass
class GetAlertsAlertIDAttachmentsAttachmentIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    get_alerts_alert_id_attachments_attachment_id_200_application_json_binary_string: Optional[bytes] = field(default=None)
    get_alerts_alert_id_attachments_attachment_id_200_text_json_binary_string: Optional[bytes] = field(default=None)
    get_alerts_alert_id_attachments_attachment_id_200_text_plain_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
