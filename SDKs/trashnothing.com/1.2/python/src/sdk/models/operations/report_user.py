from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ReportUserRequestBody:
    message: str = field(metadata={'multipart_form': { 'field_name': 'message' }})
    subject: str = field(metadata={'multipart_form': { 'field_name': 'subject' }})
    group_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'group_id' }})
    user_email: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_email' }})
    user_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclass
class ReportUserRequest:
    request: ReportUserRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class ReportUserResponse:
    content_type: str = field()
    status_code: int = field()
    
