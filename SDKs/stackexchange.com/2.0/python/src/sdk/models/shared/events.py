from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class Events:
    creation_date: Optional[int] = field(default=None)
    event_type: Optional[str] = field(default=None)
    excerpt: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    the_id_of_the_object_answer_comment_question_or_user_the_event_describes: Optional[int] = field(default=None)
    
