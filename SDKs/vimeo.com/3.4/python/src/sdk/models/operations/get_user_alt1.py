from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user: Optional[shared.User] = field(default=None)
    
