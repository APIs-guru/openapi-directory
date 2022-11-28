from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class TagSynonyms:
    applied_count: Optional[int] = field(default=None)
    creation_date: Optional[int] = field(default=None)
    from_tag: Optional[str] = field(default=None)
    last_applied_date: Optional[int] = field(default=None)
    to_tag: Optional[str] = field(default=None)
    
