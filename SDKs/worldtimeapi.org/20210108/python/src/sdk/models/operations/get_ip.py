from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class GetIPResponse:
    content_type: str = field()
    status_code: int = field()
    date_time_json_response: Optional[Any] = field(default=None)
    error_json_response: Optional[Any] = field(default=None)
    
