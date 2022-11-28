from dataclasses import dataclass, field



@dataclass
class MarkAllConversationsReadRequestBody:
    message_id: str = field(metadata={'multipart_form': { 'field_name': 'message_id' }})
    

@dataclass
class MarkAllConversationsReadRequest:
    request: MarkAllConversationsReadRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class MarkAllConversationsReadResponse:
    content_type: str = field()
    status_code: int = field()
    
