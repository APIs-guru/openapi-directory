from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class OptCapProgramInPriceHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    wm_qos_correlation_id: str = field(metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID', 'style': 'simple', 'explode': False }})
    wm_sec_access_token: str = field(metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN', 'style': 'simple', 'explode': False }})
    wm_svc_name: str = field(metadata={'header': { 'field_name': 'WM_SVC.NAME', 'style': 'simple', 'explode': False }})
    wm_consumer_channel_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class OptCapProgramInPriceRequestBody:
    subsidy_enrolled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subsidyEnrolled') }})
    subsidy_preference: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subsidyPreference') }})
    

@dataclass_json
@dataclass
class OptCapProgramInPrice200ApplicationJSONStatusInfo:
    subsidy_enrolled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subsidyEnrolled') }})
    subsidy_preference: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subsidyPreference') }})
    

@dataclass_json
@dataclass
class OptCapProgramInPrice200ApplicationJSON:
    mart_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('martId') }})
    status_info: Optional[OptCapProgramInPrice200ApplicationJSONStatusInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusInfo') }})
    

@dataclass
class OptCapProgramInPriceRequest:
    headers: OptCapProgramInPriceHeaders = field()
    request: OptCapProgramInPriceRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class OptCapProgramInPriceResponse:
    content_type: str = field()
    status_code: int = field()
    opt_cap_program_in_price_200_application_json_object: Optional[OptCapProgramInPrice200ApplicationJSON] = field(default=None)
    
