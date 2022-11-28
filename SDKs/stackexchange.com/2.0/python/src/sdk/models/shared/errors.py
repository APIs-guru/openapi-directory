from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Errors:
    description: Optional[str] = field(default=None)
    error_id: Optional[int] = field(default=None)
    error_name: Optional[str] = field(default=None)
    
