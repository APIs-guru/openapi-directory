from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ItemApplicationScopesUpdateRequest:
    r"""ItemApplicationScopesUpdateRequest
    ItemApplicationScopesUpdateRequest defines the request schema for `/item/application/scopes/update`
    """
    
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    application_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_id') }})
    scopes: Scopes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
