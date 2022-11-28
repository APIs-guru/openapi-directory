from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class GetIPTxtResponse:
    content_type: str = field()
    status_code: int = field()
    date_time_text_response: Optional[str] = field(default=None)
    error_text_response: Optional[str] = field(default=None)
    
