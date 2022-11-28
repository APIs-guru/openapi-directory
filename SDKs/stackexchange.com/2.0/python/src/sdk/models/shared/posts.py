from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional


@dataclass
class PostsLastEditorBadgeCounts:
    bronze: Optional[int] = field(default=None)
    gold: Optional[int] = field(default=None)
    silver: Optional[int] = field(default=None)
    

@dataclass
class PostsLastEditor:
    accept_rate: Optional[int] = field(default=None)
    badge_counts: Optional[PostsLastEditorBadgeCounts] = field(default=None)
    display_name: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    profile_image: Optional[str] = field(default=None)
    reputation: Optional[int] = field(default=None)
    user_id: Optional[int] = field(default=None)
    user_type: Optional[str] = field(default=None)
    

@dataclass
class PostsOwnerBadgeCounts:
    bronze: Optional[int] = field(default=None)
    gold: Optional[int] = field(default=None)
    silver: Optional[int] = field(default=None)
    

@dataclass
class PostsOwner:
    accept_rate: Optional[int] = field(default=None)
    badge_counts: Optional[PostsOwnerBadgeCounts] = field(default=None)
    display_name: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    profile_image: Optional[str] = field(default=None)
    reputation: Optional[int] = field(default=None)
    user_id: Optional[int] = field(default=None)
    user_type: Optional[str] = field(default=None)
    

@dataclass
class Posts:
    body: Optional[str] = field(default=None)
    body_markdown: Optional[str] = field(default=None)
    comment_count: Optional[int] = field(default=None)
    comments: Optional[List[Any]] = field(default=None)
    creation_date: Optional[int] = field(default=None)
    down_vote_count: Optional[int] = field(default=None)
    downvoted: Optional[bool] = field(default=None)
    last_activity_date: Optional[int] = field(default=None)
    last_edit_date: Optional[int] = field(default=None)
    last_editor: Optional[PostsLastEditor] = field(default=None)
    link: Optional[str] = field(default=None)
    owner: Optional[PostsOwner] = field(default=None)
    post_id: Optional[int] = field(default=None)
    post_type: Optional[str] = field(default=None)
    score: Optional[int] = field(default=None)
    share_link: Optional[str] = field(default=None)
    title: Optional[str] = field(default=None)
    up_vote_count: Optional[int] = field(default=None)
    upvoted: Optional[bool] = field(default=None)
    
