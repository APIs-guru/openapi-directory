from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional


@dataclass
class RevisionsUserBadgeCounts:
    bronze: Optional[int] = field(default=None)
    gold: Optional[int] = field(default=None)
    silver: Optional[int] = field(default=None)
    

@dataclass
class RevisionsUser:
    accept_rate: Optional[int] = field(default=None)
    badge_counts: Optional[RevisionsUserBadgeCounts] = field(default=None)
    display_name: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    profile_image: Optional[str] = field(default=None)
    reputation: Optional[int] = field(default=None)
    user_id: Optional[int] = field(default=None)
    user_type: Optional[str] = field(default=None)
    

@dataclass
class Revisions:
    body: Optional[str] = field(default=None)
    comment: Optional[str] = field(default=None)
    creation_date: Optional[int] = field(default=None)
    is_rollback: Optional[bool] = field(default=None)
    last_body: Optional[str] = field(default=None)
    last_tags: Optional[List[Any]] = field(default=None)
    last_title: Optional[str] = field(default=None)
    post_id: Optional[int] = field(default=None)
    post_type: Optional[str] = field(default=None)
    revision_guid: Optional[str] = field(default=None)
    revision_number: Optional[int] = field(default=None)
    revision_type: Optional[str] = field(default=None)
    set_community_wiki: Optional[bool] = field(default=None)
    tags: Optional[List[Any]] = field(default=None)
    title: Optional[str] = field(default=None)
    user: Optional[RevisionsUser] = field(default=None)
    
