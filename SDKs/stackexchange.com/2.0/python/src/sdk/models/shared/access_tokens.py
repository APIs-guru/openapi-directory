from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional


@dataclass
class AccessTokens:
    access_token: Optional[str] = field(default=None)
    account_id: Optional[int] = field(default=None)
    expires_on_date: Optional[int] = field(default=None)
    scope: Optional[List[Any]] = field(default=None)
    
