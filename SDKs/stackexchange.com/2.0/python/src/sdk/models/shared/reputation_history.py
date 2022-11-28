from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class ReputationHistory:
    creation_date: Optional[int] = field(default=None)
    post_id: Optional[int] = field(default=None)
    reputation_change: Optional[int] = field(default=None)
    reputation_history_type: Optional[str] = field(default=None)
    user_id: Optional[int] = field(default=None)
    
