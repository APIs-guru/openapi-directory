from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateTransactionTagsRequest:
    r"""UpdateTransactionTagsRequest
    Request to add or remove tags associated with a transaction.
    
    """
    
    data: List[TagInputResourceIdentifier] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
