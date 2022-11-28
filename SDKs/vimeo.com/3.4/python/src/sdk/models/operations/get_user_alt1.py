from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserAlt1Response:
    content_type: str = field()
    status_code: int = field()
    user: Optional[shared.User] = field(default=None)
    
