from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class AccountMerge:
    merge_date: Optional[int] = field(default=None)
    new_account_id: Optional[int] = field(default=None)
    old_account_id: Optional[int] = field(default=None)
    
