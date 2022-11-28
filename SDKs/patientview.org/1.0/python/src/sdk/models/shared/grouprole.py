from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GroupRole:
    group: Optional[Group] = field(default=None)
    id: Optional[int] = field(default=None)
    role: Optional[Role] = field(default=None)
    
