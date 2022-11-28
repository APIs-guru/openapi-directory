from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TopTagObjects:
    answer_count: Optional[int] = field(default=None)
    answer_score: Optional[int] = field(default=None)
    question_count: Optional[int] = field(default=None)
    question_score: Optional[int] = field(default=None)
    tag_name: Optional[str] = field(default=None)
    user_id: Optional[int] = field(default=None)
    
