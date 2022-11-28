from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Error:
    error_id: Optional[float] = field(default=None)
    error_message: Optional[str] = field(default=None)
    error_name: Optional[str] = field(default=None)
    
