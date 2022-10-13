from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UserGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_dto: Optional[shared.UserDto] = field(default=None)
    
