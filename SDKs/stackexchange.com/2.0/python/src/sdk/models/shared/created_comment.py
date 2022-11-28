from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class CreatedCommentOwnerBadgeCounts:
    bronze: Optional[int] = field(default=None)
    gold: Optional[int] = field(default=None)
    silver: Optional[int] = field(default=None)
    

@dataclass
class CreatedCommentOwner:
    accept_rate: Optional[int] = field(default=None)
    badge_counts: Optional[CreatedCommentOwnerBadgeCounts] = field(default=None)
    display_name: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    profile_image: Optional[str] = field(default=None)
    reputation: Optional[int] = field(default=None)
    user_id: Optional[int] = field(default=None)
    user_type: Optional[str] = field(default=None)
    

@dataclass
class CreatedCommentReplyToUserBadgeCounts:
    bronze: Optional[int] = field(default=None)
    gold: Optional[int] = field(default=None)
    silver: Optional[int] = field(default=None)
    

@dataclass
class CreatedCommentReplyToUser:
    accept_rate: Optional[int] = field(default=None)
    badge_counts: Optional[CreatedCommentReplyToUserBadgeCounts] = field(default=None)
    display_name: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    profile_image: Optional[str] = field(default=None)
    reputation: Optional[int] = field(default=None)
    user_id: Optional[int] = field(default=None)
    user_type: Optional[str] = field(default=None)
    

@dataclass
class CreatedComment:
    body: Optional[str] = field(default=None)
    body_markdown: Optional[str] = field(default=None)
    can_flag: Optional[bool] = field(default=None)
    comment_id: Optional[int] = field(default=None)
    creation_date: Optional[int] = field(default=None)
    edited: Optional[bool] = field(default=None)
    link: Optional[str] = field(default=None)
    owner: Optional[CreatedCommentOwner] = field(default=None)
    post_id: Optional[int] = field(default=None)
    post_type: Optional[str] = field(default=None)
    reply_to_user: Optional[CreatedCommentReplyToUser] = field(default=None)
    score: Optional[int] = field(default=None)
    upvoted: Optional[bool] = field(default=None)
    
