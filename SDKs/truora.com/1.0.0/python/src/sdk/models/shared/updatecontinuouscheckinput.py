from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class UpdateContinuousCheckInputStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass
class UpdateContinuousCheckInput:
    r"""UpdateContinuousCheckInput
     Represents to UpdateContinuousCheckInput
    """
    
    frequency: str = field(metadata={'form': { 'field_name': 'frequency' }})
    status: UpdateContinuousCheckInputStatusEnum = field(metadata={'form': { 'field_name': 'status' }})
    
