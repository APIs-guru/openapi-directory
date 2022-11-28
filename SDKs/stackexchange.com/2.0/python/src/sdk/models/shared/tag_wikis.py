from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class TagWikisLastBodyEditorBadgeCounts:
    bronze: Optional[int] = field(default=None)
    gold: Optional[int] = field(default=None)
    silver: Optional[int] = field(default=None)
    

@dataclass
class TagWikisLastBodyEditor:
    accept_rate: Optional[int] = field(default=None)
    badge_counts: Optional[TagWikisLastBodyEditorBadgeCounts] = field(default=None)
    display_name: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    profile_image: Optional[str] = field(default=None)
    reputation: Optional[int] = field(default=None)
    user_id: Optional[int] = field(default=None)
    user_type: Optional[str] = field(default=None)
    

@dataclass
class TagWikisLastExcerptEditorBadgeCounts:
    bronze: Optional[int] = field(default=None)
    gold: Optional[int] = field(default=None)
    silver: Optional[int] = field(default=None)
    

@dataclass
class TagWikisLastExcerptEditor:
    accept_rate: Optional[int] = field(default=None)
    badge_counts: Optional[TagWikisLastExcerptEditorBadgeCounts] = field(default=None)
    display_name: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    profile_image: Optional[str] = field(default=None)
    reputation: Optional[int] = field(default=None)
    user_id: Optional[int] = field(default=None)
    user_type: Optional[str] = field(default=None)
    

@dataclass
class TagWikis:
    body: Optional[str] = field(default=None)
    body_last_edit_date: Optional[int] = field(default=None)
    excerpt: Optional[str] = field(default=None)
    excerpt_last_edit_date: Optional[int] = field(default=None)
    last_body_editor: Optional[TagWikisLastBodyEditor] = field(default=None)
    last_excerpt_editor: Optional[TagWikisLastExcerptEditor] = field(default=None)
    tag_name: Optional[str] = field(default=None)
    
