from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional


@dataclass
class NetworkUsersBadgeCounts:
    bronze: Optional[int] = field(default=None)
    gold: Optional[int] = field(default=None)
    silver: Optional[int] = field(default=None)
    

@dataclass
class NetworkUsers:
    account_id: Optional[int] = field(default=None)
    answer_count: Optional[int] = field(default=None)
    badge_counts: Optional[NetworkUsersBadgeCounts] = field(default=None)
    creation_date: Optional[int] = field(default=None)
    last_access_date: Optional[int] = field(default=None)
    question_count: Optional[int] = field(default=None)
    reputation: Optional[int] = field(default=None)
    site_name: Optional[str] = field(default=None)
    site_url: Optional[str] = field(default=None)
    top_answers: Optional[List[Any]] = field(default=None)
    top_questions: Optional[List[Any]] = field(default=None)
    user_id: Optional[int] = field(default=None)
    user_type: Optional[str] = field(default=None)
    
