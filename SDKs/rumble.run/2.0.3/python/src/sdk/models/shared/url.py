from dataclasses import dataclass, field
from typing import Optional


@dataclass
class URL:
    r"""URL
    A URL to a resource
    """
    
    id: Optional[str] = field(default=None)
    
