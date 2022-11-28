from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class APIKey:
    expired: Optional[bool] = field(default=None)
    expiry_date: Optional[datetime] = field(default=None)
    key: Optional[str] = field(default=None)
    
