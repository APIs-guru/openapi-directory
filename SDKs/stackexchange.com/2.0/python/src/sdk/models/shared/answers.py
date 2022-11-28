from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional


@dataclass
class AnswersLastEditorBadgeCounts:
    bronze: Optional[int] = field(default=None)
    gold: Optional[int] = field(default=None)
    silver: Optional[int] = field(default=None)
    

@dataclass
class AnswersLastEditor:
    accept_rate: Optional[int] = field(default=None)
    badge_counts: Optional[AnswersLastEditorBadgeCounts] = field(default=None)
    display_name: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    profile_image: Optional[str] = field(default=None)
    reputation: Optional[int] = field(default=None)
    user_id: Optional[int] = field(default=None)
    user_type: Optional[str] = field(default=None)
    

@dataclass
class AnswersOwnerBadgeCounts:
    bronze: Optional[int] = field(default=None)
    gold: Optional[int] = field(default=None)
    silver: Optional[int] = field(default=None)
    

@dataclass
class AnswersOwner:
    accept_rate: Optional[int] = field(default=None)
    badge_counts: Optional[AnswersOwnerBadgeCounts] = field(default=None)
    display_name: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    profile_image: Optional[str] = field(default=None)
    reputation: Optional[int] = field(default=None)
    user_id: Optional[int] = field(default=None)
    user_type: Optional[str] = field(default=None)
    

@dataclass
class Answers:
    accepted: Optional[bool] = field(default=None)
    answer_id: Optional[int] = field(default=None)
    awarded_bounty_amount: Optional[int] = field(default=None)
    awarded_bounty_users: Optional[List[Any]] = field(default=None)
    body: Optional[str] = field(default=None)
    body_markdown: Optional[str] = field(default=None)
    can_flag: Optional[bool] = field(default=None)
    comment_count: Optional[int] = field(default=None)
    comments: Optional[List[Any]] = field(default=None)
    community_owned_date: Optional[int] = field(default=None)
    creation_date: Optional[int] = field(default=None)
    down_vote_count: Optional[int] = field(default=None)
    downvoted: Optional[bool] = field(default=None)
    is_accepted: Optional[bool] = field(default=None)
    last_activity_date: Optional[int] = field(default=None)
    last_edit_date: Optional[int] = field(default=None)
    last_editor: Optional[AnswersLastEditor] = field(default=None)
    link: Optional[str] = field(default=None)
    locked_date: Optional[int] = field(default=None)
    owner: Optional[AnswersOwner] = field(default=None)
    question_id: Optional[int] = field(default=None)
    score: Optional[int] = field(default=None)
    share_link: Optional[str] = field(default=None)
    tags: Optional[List[Any]] = field(default=None)
    title: Optional[str] = field(default=None)
    up_vote_count: Optional[int] = field(default=None)
    upvoted: Optional[bool] = field(default=None)
    
