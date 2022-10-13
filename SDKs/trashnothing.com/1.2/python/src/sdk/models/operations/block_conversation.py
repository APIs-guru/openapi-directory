from dataclasses import dataclass, field



@dataclass
class BlockConversationPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BlockConversationRequest:
    path_params: BlockConversationPathParams = field(default=None)
    

@dataclass
class BlockConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
