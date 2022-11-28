from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class UserFeature:
    created: Optional[datetime] = field(default=None)
    feature: Optional[Feature] = field(default=None)
    id: Optional[int] = field(default=None)
    last_update: Optional[datetime] = field(default=None)
    opt_in_date: Optional[datetime] = field(default=None)
    opt_in_hidden: Optional[bool] = field(default=None)
    opt_in_status: Optional[bool] = field(default=None)
    opt_out_hidden: Optional[bool] = field(default=None)
    
