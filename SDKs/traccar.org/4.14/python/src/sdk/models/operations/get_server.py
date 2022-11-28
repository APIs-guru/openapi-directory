from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetServerResponse:
    content_type: str = field()
    status_code: int = field()
    server: Optional[shared.Server] = field(default=None)
    
