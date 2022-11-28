from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class ReputationChanges:
    link: Optional[str] = field(default=None)
    on_date: Optional[int] = field(default=None)
    post_id: Optional[int] = field(default=None)
    post_type: Optional[str] = field(default=None)
    reputation_change: Optional[int] = field(default=None)
    title: Optional[str] = field(default=None)
    user_id: Optional[int] = field(default=None)
    vote_type: Optional[str] = field(default=None)
    
