from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class BaseGroup:
    code: Optional[str] = field(default=None)
    group_type: Optional[Lookup] = field(default=None)
    id: Optional[int] = field(default=None)
    last_import_date: Optional[datetime] = field(default=None)
    name: Optional[str] = field(default=None)
    parent_codes: Optional[List[str]] = field(default=None)
    short_name: Optional[str] = field(default=None)
    visible: Optional[bool] = field(default=None)
    visible_to_join: Optional[bool] = field(default=None)
    
