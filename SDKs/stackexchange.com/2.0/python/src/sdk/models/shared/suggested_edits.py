from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional


@dataclass
class SuggestedEditsProposingUserBadgeCounts:
    bronze: Optional[int] = field(default=None)
    gold: Optional[int] = field(default=None)
    silver: Optional[int] = field(default=None)
    

@dataclass
class SuggestedEditsProposingUser:
    accept_rate: Optional[int] = field(default=None)
    badge_counts: Optional[SuggestedEditsProposingUserBadgeCounts] = field(default=None)
    display_name: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    profile_image: Optional[str] = field(default=None)
    reputation: Optional[int] = field(default=None)
    user_id: Optional[int] = field(default=None)
    user_type: Optional[str] = field(default=None)
    

@dataclass
class SuggestedEdits:
    approval_date: Optional[int] = field(default=None)
    body: Optional[str] = field(default=None)
    comment: Optional[str] = field(default=None)
    creation_date: Optional[int] = field(default=None)
    post_id: Optional[int] = field(default=None)
    post_type: Optional[str] = field(default=None)
    proposing_user: Optional[SuggestedEditsProposingUser] = field(default=None)
    rejection_date: Optional[int] = field(default=None)
    suggested_edit_id: Optional[int] = field(default=None)
    tags: Optional[List[Any]] = field(default=None)
    title: Optional[str] = field(default=None)
    
