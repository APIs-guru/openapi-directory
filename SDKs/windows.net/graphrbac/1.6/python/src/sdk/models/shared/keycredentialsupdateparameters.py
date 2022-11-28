from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KeyCredentialsUpdateParameters:
    r"""KeyCredentialsUpdateParameters
    Request parameters for a KeyCredentials update operation
    """
    
    value: List[dict[str, dict[str, Any]]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
