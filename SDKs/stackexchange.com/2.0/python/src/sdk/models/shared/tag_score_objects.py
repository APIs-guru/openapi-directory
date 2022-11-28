from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TagScoreObjectsUserBadgeCounts:
    bronze: Optional[int] = field(default=None)
    gold: Optional[int] = field(default=None)
    silver: Optional[int] = field(default=None)
    

@dataclass
class TagScoreObjectsUser:
    accept_rate: Optional[int] = field(default=None)
    badge_counts: Optional[TagScoreObjectsUserBadgeCounts] = field(default=None)
    display_name: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    profile_image: Optional[str] = field(default=None)
    reputation: Optional[int] = field(default=None)
    user_id: Optional[int] = field(default=None)
    user_type: Optional[str] = field(default=None)
    

@dataclass
class TagScoreObjects:
    post_count: Optional[int] = field(default=None)
    score: Optional[int] = field(default=None)
    user: Optional[TagScoreObjectsUser] = field(default=None)
    
