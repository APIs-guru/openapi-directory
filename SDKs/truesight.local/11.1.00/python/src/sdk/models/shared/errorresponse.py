from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class ErrorResponse:
    code: Optional[str] = field(default=None)
    date_: Optional[datetime] = field(default=None)
    message: Optional[str] = field(default=None)
    
