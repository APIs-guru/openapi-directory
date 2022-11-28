from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class QuestionTimelineEventsOwnerBadgeCounts:
    bronze: Optional[int] = field(default=None)
    gold: Optional[int] = field(default=None)
    silver: Optional[int] = field(default=None)
    

@dataclass
class QuestionTimelineEventsOwner:
    accept_rate: Optional[int] = field(default=None)
    badge_counts: Optional[QuestionTimelineEventsOwnerBadgeCounts] = field(default=None)
    display_name: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    profile_image: Optional[str] = field(default=None)
    reputation: Optional[int] = field(default=None)
    user_id: Optional[int] = field(default=None)
    user_type: Optional[str] = field(default=None)
    

@dataclass
class QuestionTimelineEventsUserBadgeCounts:
    bronze: Optional[int] = field(default=None)
    gold: Optional[int] = field(default=None)
    silver: Optional[int] = field(default=None)
    

@dataclass
class QuestionTimelineEventsUser:
    accept_rate: Optional[int] = field(default=None)
    badge_counts: Optional[QuestionTimelineEventsUserBadgeCounts] = field(default=None)
    display_name: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    profile_image: Optional[str] = field(default=None)
    reputation: Optional[int] = field(default=None)
    user_id: Optional[int] = field(default=None)
    user_type: Optional[str] = field(default=None)
    

@dataclass
class QuestionTimelineEvents:
    comment_id: Optional[int] = field(default=None)
    creation_date: Optional[int] = field(default=None)
    down_vote_count: Optional[int] = field(default=None)
    owner: Optional[QuestionTimelineEventsOwner] = field(default=None)
    post_id: Optional[int] = field(default=None)
    question_id: Optional[int] = field(default=None)
    revision_guid: Optional[str] = field(default=None)
    timeline_type: Optional[str] = field(default=None)
    up_vote_count: Optional[int] = field(default=None)
    user: Optional[QuestionTimelineEventsUser] = field(default=None)
    
