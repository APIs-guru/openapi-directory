from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ReportUserRequestBody:
    group_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'group_id' }})
    message: str = field(default=None, metadata={'multipart_form': { 'field_name': 'message' }})
    subject: str = field(default=None, metadata={'multipart_form': { 'field_name': 'subject' }})
    user_email: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_email' }})
    user_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclass
class ReportUserRequest:
    request: ReportUserRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class ReportUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
