from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class Route:
    controller: Optional[str] = field(default=None)
    created: Optional[datetime] = field(default=None)
    display_order: Optional[int] = field(default=None)
    id: Optional[int] = field(default=None)
    lookup: Optional[Lookup] = field(default=None)
    template_url: Optional[str] = field(default=None)
    title: Optional[str] = field(default=None)
    url: Optional[str] = field(default=None)
    
