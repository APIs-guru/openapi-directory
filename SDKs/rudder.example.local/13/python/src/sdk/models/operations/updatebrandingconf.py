from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class UpdateBRandingConf200ApplicationJSONActionEnum(str, Enum):
    UPDATE_B_RANDING_CONF = "updateBRandingConf"


@dataclass_json
@dataclass
class UpdateBRandingConf200ApplicationJSONData:
    branding: shared.BrandingConf = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branding') }})
    
class UpdateBRandingConf200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateBRandingConf200ApplicationJSON:
    action: UpdateBRandingConf200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateBRandingConf200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateBRandingConf200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class UpdateBRandingConfRequest:
    request: shared.BrandingConf = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateBRandingConfResponse:
    content_type: str = field()
    status_code: int = field()
    update_b_randing_conf_200_application_json_object: Optional[UpdateBRandingConf200ApplicationJSON] = field(default=None)
    
