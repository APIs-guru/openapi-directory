from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SendFeedbackRequestBody:
    message: str = field(metadata={'multipart_form': { 'field_name': 'message' }})
    subject: str = field(metadata={'multipart_form': { 'field_name': 'subject' }})
    meta: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'meta' }})
    

@dataclass
class SendFeedbackRequest:
    request: SendFeedbackRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class SendFeedbackResponse:
    content_type: str = field()
    status_code: int = field()
    
