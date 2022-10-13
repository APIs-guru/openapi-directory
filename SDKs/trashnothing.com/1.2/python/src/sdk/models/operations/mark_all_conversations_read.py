from dataclasses import dataclass, field



@dataclass
class MarkAllConversationsReadRequestBody:
    message_id: str = field(default=None, metadata={'multipart_form': { 'field_name': 'message_id' }})
    

@dataclass
class MarkAllConversationsReadRequest:
    request: MarkAllConversationsReadRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class MarkAllConversationsReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
