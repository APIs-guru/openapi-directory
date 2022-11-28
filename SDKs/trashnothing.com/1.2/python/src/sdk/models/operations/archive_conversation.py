from dataclasses import dataclass, field



@dataclass
class ArchiveConversationPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ArchiveConversationRequest:
    path_params: ArchiveConversationPathParams = field()
    

@dataclass
class ArchiveConversationResponse:
    content_type: str = field()
    status_code: int = field()
    
