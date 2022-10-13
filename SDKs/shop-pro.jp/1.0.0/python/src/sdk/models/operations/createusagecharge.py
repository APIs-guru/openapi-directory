from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateUsageChargePathParams:
    recurring_application_charge_id: str = field(default=None, metadata={'path_param': { 'field_name': 'recurringApplicationChargeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUsageChargeHeaders:
    x_appstore_usage_charge_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Appstore-Usage-Charge-Token' }})
    

@dataclass_json
@dataclass
class CreateUsageChargeRequestBodyUsageCharge:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    point: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'point' }})
    

@dataclass_json
@dataclass
class CreateUsageChargeRequestBody:
    usage_charge: Optional[CreateUsageChargeRequestBodyUsageCharge] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage_charge' }})
    

@dataclass
class CreateUsageChargeSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateUsageChargeRequest:
    path_params: CreateUsageChargePathParams = field(default=None)
    headers: CreateUsageChargeHeaders = field(default=None)
    request: CreateUsageChargeRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateUsageChargeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateUsageCharge201ApplicationJSONUsageCharge:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'make_date' }})
    point: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'point' }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_date' }})
    

@dataclass_json
@dataclass
class CreateUsageCharge201ApplicationJSON:
    usage_charge: Optional[CreateUsageCharge201ApplicationJSONUsageCharge] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage_charge' }})
    

@dataclass
class CreateUsageChargeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_usage_charge_201_application_json_object: Optional[CreateUsageCharge201ApplicationJSON] = field(default=None)
    
