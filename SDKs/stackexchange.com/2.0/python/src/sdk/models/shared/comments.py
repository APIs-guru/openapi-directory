from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class CommentsOwnerBadgeCounts:
    bronze: Optional[int] = field(default=None)
    gold: Optional[int] = field(default=None)
    silver: Optional[int] = field(default=None)
    

@dataclass
class CommentsOwner:
    accept_rate: Optional[int] = field(default=None)
    badge_counts: Optional[CommentsOwnerBadgeCounts] = field(default=None)
    display_name: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    profile_image: Optional[str] = field(default=None)
    reputation: Optional[int] = field(default=None)
    user_id: Optional[int] = field(default=None)
    user_type: Optional[str] = field(default=None)
    

@dataclass
class CommentsReplyToUserBadgeCounts:
    bronze: Optional[int] = field(default=None)
    gold: Optional[int] = field(default=None)
    silver: Optional[int] = field(default=None)
    

@dataclass
class CommentsReplyToUser:
    accept_rate: Optional[int] = field(default=None)
    badge_counts: Optional[CommentsReplyToUserBadgeCounts] = field(default=None)
    display_name: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    profile_image: Optional[str] = field(default=None)
    reputation: Optional[int] = field(default=None)
    user_id: Optional[int] = field(default=None)
    user_type: Optional[str] = field(default=None)
    

@dataclass
class Comments:
    body: Optional[str] = field(default=None)
    body_markdown: Optional[str] = field(default=None)
    can_flag: Optional[bool] = field(default=None)
    comment_id: Optional[int] = field(default=None)
    creation_date: Optional[int] = field(default=None)
    edited: Optional[bool] = field(default=None)
    link: Optional[str] = field(default=None)
    owner: Optional[CommentsOwner] = field(default=None)
    post_id: Optional[int] = field(default=None)
    post_type: Optional[str] = field(default=None)
    reply_to_user: Optional[CommentsReplyToUser] = field(default=None)
    score: Optional[int] = field(default=None)
    upvoted: Optional[bool] = field(default=None)
    
