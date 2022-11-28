from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class PostApplicationChargeRequestBodyApplicationCharge:
    application_charge_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_charge_source_id') }})
    

@dataclass_json
@dataclass
class PostApplicationChargeRequestBody:
    application_charge: Optional[PostApplicationChargeRequestBodyApplicationCharge] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_charge') }})
    

@dataclass
class PostApplicationChargeSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class PostApplicationCharge201ApplicationJSONApplicationCharge:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    point: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('point') }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclass
class PostApplicationCharge201ApplicationJSON:
    application_charge: Optional[PostApplicationCharge201ApplicationJSONApplicationCharge] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_charge') }})
    

@dataclass
class PostApplicationChargeRequest:
    request: PostApplicationChargeRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostApplicationChargeSecurity = field()
    

@dataclass
class PostApplicationChargeResponse:
    content_type: str = field()
    status_code: int = field()
    post_application_charge_201_application_json_object: Optional[PostApplicationCharge201ApplicationJSON] = field(default=None)
    
