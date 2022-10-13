from dataclasses import dataclass, field



@dataclass
class ArchiveConversationPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ArchiveConversationRequest:
    path_params: ArchiveConversationPathParams = field(default=None)
    

@dataclass
class ArchiveConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
