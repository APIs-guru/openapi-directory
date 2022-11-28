from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateUsageChargePathParams:
    recurring_application_charge_id: str = field(metadata={'path_param': { 'field_name': 'recurringApplicationChargeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUsageChargeHeaders:
    x_appstore_usage_charge_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Appstore-Usage-Charge-Token', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateUsageChargeRequestBodyUsageCharge:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    point: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('point') }})
    

@dataclass_json
@dataclass
class CreateUsageChargeRequestBody:
    usage_charge: Optional[CreateUsageChargeRequestBodyUsageCharge] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_charge') }})
    

@dataclass
class CreateUsageChargeSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class CreateUsageCharge201ApplicationJSONUsageCharge:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    point: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('point') }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclass
class CreateUsageCharge201ApplicationJSON:
    usage_charge: Optional[CreateUsageCharge201ApplicationJSONUsageCharge] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_charge') }})
    

@dataclass
class CreateUsageChargeRequest:
    headers: CreateUsageChargeHeaders = field()
    path_params: CreateUsageChargePathParams = field()
    request: CreateUsageChargeRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateUsageChargeSecurity = field()
    

@dataclass
class CreateUsageChargeResponse:
    content_type: str = field()
    status_code: int = field()
    create_usage_charge_201_application_json_object: Optional[CreateUsageCharge201ApplicationJSON] = field(default=None)
    
