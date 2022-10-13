from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutNotificationsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutNotificationsIDRequest:
    path_params: PutNotificationsIDPathParams = field(default=None)
    request: shared.Notification = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutNotificationsIDResponse:
    content_type: str = field(default=None)
    notification: Optional[shared.Notification] = field(default=None)
    status_code: int = field(default=None)
    
