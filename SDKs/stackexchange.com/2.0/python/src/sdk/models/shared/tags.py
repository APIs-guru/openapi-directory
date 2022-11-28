from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional


@dataclass
class Tags:
    count: Optional[int] = field(default=None)
    has_synonyms: Optional[bool] = field(default=None)
    is_moderator_only: Optional[bool] = field(default=None)
    is_required: Optional[bool] = field(default=None)
    last_activity_date: Optional[int] = field(default=None)
    name: Optional[str] = field(default=None)
    synonyms: Optional[List[Any]] = field(default=None)
    user_id: Optional[int] = field(default=None)
    
