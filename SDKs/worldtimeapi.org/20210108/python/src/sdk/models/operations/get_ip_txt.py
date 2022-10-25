from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetIPTxtResponse:
    content_type: str = field(default=None)
    date_time_text_response: Optional[str] = field(default=None)
    error_text_response: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
