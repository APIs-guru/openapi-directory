from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Comic:
    alt: Optional[str] = field(default=None)
    day: Optional[str] = field(default=None)
    img: Optional[str] = field(default=None)
    link: Optional[str] = field(default=None)
    month: Optional[str] = field(default=None)
    news: Optional[str] = field(default=None)
    num: Optional[float] = field(default=None)
    safe_title: Optional[str] = field(default=None)
    title: Optional[str] = field(default=None)
    transcript: Optional[str] = field(default=None)
    year: Optional[str] = field(default=None)
    
