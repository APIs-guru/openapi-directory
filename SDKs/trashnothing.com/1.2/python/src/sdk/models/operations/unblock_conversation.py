from dataclasses import dataclass, field



@dataclass
class UnblockConversationPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnblockConversationRequest:
    path_params: UnblockConversationPathParams = field(default=None)
    

@dataclass
class UnblockConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
