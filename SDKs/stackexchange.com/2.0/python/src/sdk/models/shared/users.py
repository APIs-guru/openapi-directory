from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class UsersBadgeCounts:
    bronze: Optional[int] = field(default=None)
    gold: Optional[int] = field(default=None)
    silver: Optional[int] = field(default=None)
    

@dataclass
class Users:
    about_me: Optional[str] = field(default=None)
    accept_rate: Optional[int] = field(default=None)
    account_id: Optional[int] = field(default=None)
    age: Optional[int] = field(default=None)
    answer_count: Optional[int] = field(default=None)
    badge_counts: Optional[UsersBadgeCounts] = field(default=None)
    creation_date: Optional[int] = field(default=None)
    display_name: Optional[str] = field(default=None)
    down_vote_count: Optional[int] = field(default=None)
    is_employee: Optional[bool] = field(default=None)
    last_access_date: Optional[int] = field(default=None)
    last_modified_date: Optional[int] = field(default=None)
    link: Optional[str] = field(default=None)
    location: Optional[str] = field(default=None)
    profile_image: Optional[str] = field(default=None)
    question_count: Optional[int] = field(default=None)
    reputation: Optional[int] = field(default=None)
    reputation_change_day: Optional[int] = field(default=None)
    reputation_change_month: Optional[int] = field(default=None)
    reputation_change_quarter: Optional[int] = field(default=None)
    reputation_change_week: Optional[int] = field(default=None)
    reputation_change_year: Optional[int] = field(default=None)
    timed_penalty_date: Optional[int] = field(default=None)
    up_vote_count: Optional[int] = field(default=None)
    user_id: Optional[int] = field(default=None)
    user_type: Optional[str] = field(default=None)
    view_count: Optional[int] = field(default=None)
    website_url: Optional[str] = field(default=None)
    
