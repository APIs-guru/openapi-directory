from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetTimezoneTxtResponse:
    content_type: str = field(default=None)
    list_text_response: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
