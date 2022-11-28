from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetAuthValidate200ApplicationJSON:
    premium: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('premium') }})
    

@dataclass
class GetAuthValidateResponse:
    content_type: str = field()
    status_code: int = field()
    get_auth_validate_200_application_json_object: Optional[GetAuthValidate200ApplicationJSON] = field(default=None)
    
