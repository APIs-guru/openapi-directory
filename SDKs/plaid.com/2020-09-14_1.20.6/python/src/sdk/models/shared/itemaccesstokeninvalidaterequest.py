from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItemAccessTokenInvalidateRequest:
    r"""ItemAccessTokenInvalidateRequest
    ItemAccessTokenInvalidateRequest defines the request schema for `/item/access_token/invalidate`
    """
    
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
