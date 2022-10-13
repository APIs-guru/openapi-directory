from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostApplicationChargeRequestBodyApplicationCharge:
    application_charge_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application_charge_source_id' }})
    

@dataclass_json
@dataclass
class PostApplicationChargeRequestBody:
    application_charge: Optional[PostApplicationChargeRequestBodyApplicationCharge] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application_charge' }})
    

@dataclass
class PostApplicationChargeSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostApplicationChargeRequest:
    request: PostApplicationChargeRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostApplicationChargeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostApplicationCharge201ApplicationJSONApplicationCharge:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'make_date' }})
    point: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'point' }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_date' }})
    

@dataclass_json
@dataclass
class PostApplicationCharge201ApplicationJSON:
    application_charge: Optional[PostApplicationCharge201ApplicationJSONApplicationCharge] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application_charge' }})
    

@dataclass
class PostApplicationChargeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    post_application_charge_201_application_json_object: Optional[PostApplicationCharge201ApplicationJSON] = field(default=None)
    
