from dataclasses import dataclass, field



@dataclass
class BlockConversationPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BlockConversationRequest:
    path_params: BlockConversationPathParams = field()
    

@dataclass
class BlockConversationResponse:
    content_type: str = field()
    status_code: int = field()
    
