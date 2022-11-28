from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class FhirAllergy:
    confidence_level: Optional[str] = field(default=None)
    group: Optional[Group] = field(default=None)
    id: Optional[int] = field(default=None)
    identifier: Optional[str] = field(default=None)
    info_source: Optional[str] = field(default=None)
    reaction: Optional[str] = field(default=None)
    recorded_date: Optional[datetime] = field(default=None)
    status: Optional[str] = field(default=None)
    substance: Optional[str] = field(default=None)
    type: Optional[str] = field(default=None)
    
