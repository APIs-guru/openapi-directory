from dataclasses import dataclass, field
from typing import Optional


@dataclass
class BadgesUserBadgeCounts:
    bronze: Optional[int] = field(default=None)
    gold: Optional[int] = field(default=None)
    silver: Optional[int] = field(default=None)
    

@dataclass
class BadgesUser:
    accept_rate: Optional[int] = field(default=None)
    badge_counts: Optional[BadgesUserBadgeCounts] = field(default=None)
    display_name: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    profile_image: Optional[str] = field(default=None)
    reputation: Optional[int] = field(default=None)
    user_id: Optional[int] = field(default=None)
    user_type: Optional[str] = field(default=None)
    

@dataclass
class Badges:
    award_count: Optional[int] = field(default=None)
    badge_id: Optional[int] = field(default=None)
    badge_type: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    rank: Optional[str] = field(default=None)
    user: Optional[BadgesUser] = field(default=None)
    
