from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WrongInputInputEnum(str, Enum):
    DOCUMENT_EXPEDITION_DATE = "document_expedition_date"


@dataclass_json
@dataclass
class WrongInput:
    r"""WrongInput
    Represents a parameter entered during the background check creation that does not match the information obtained
    """
    
    input: Optional[WrongInputInputEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Input') }})
    
