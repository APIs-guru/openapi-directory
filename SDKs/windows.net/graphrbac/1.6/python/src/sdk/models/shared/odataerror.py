from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OdataError:
    r"""OdataError
    Active Directory OData error information.
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[ErrorMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
