from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class UserTimelineObjects:
    badge_id: Optional[int] = field(default=None)
    comment_id: Optional[int] = field(default=None)
    creation_date: Optional[int] = field(default=None)
    detail: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    post_id: Optional[int] = field(default=None)
    post_type: Optional[str] = field(default=None)
    suggested_edit_id: Optional[int] = field(default=None)
    timeline_type: Optional[str] = field(default=None)
    title: Optional[str] = field(default=None)
    user_id: Optional[int] = field(default=None)
    
