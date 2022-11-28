from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Privileges:
    description: Optional[str] = field(default=None)
    reputation: Optional[int] = field(default=None)
    short_description: Optional[str] = field(default=None)
    
