from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetTimezoneTxtResponse:
    content_type: str = field()
    status_code: int = field()
    list_text_response: Optional[str] = field(default=None)
    
