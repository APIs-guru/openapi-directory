from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UserAPIGetMessagePathParams:
    message_id: int = field(metadata={'path_param': { 'field_name': 'messageId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserAPIGetMessageRequest:
    path_params: UserAPIGetMessagePathParams = field()
    

@dataclass
class UserAPIGetMessageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    user_message_contract: Optional[shared.UserMessageContract] = field(default=None)
    
