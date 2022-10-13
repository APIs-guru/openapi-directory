from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class OptCapProgramInPriceHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    wm_consumer_channel_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE' }})
    wm_qos_correlation_id: str = field(default=None, metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID' }})
    wm_sec_access_token: str = field(default=None, metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN' }})
    wm_svc_name: str = field(default=None, metadata={'header': { 'field_name': 'WM_SVC.NAME' }})
    

@dataclass_json
@dataclass
class OptCapProgramInPriceRequestBody:
    subsidy_enrolled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subsidyEnrolled' }})
    subsidy_preference: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subsidyPreference' }})
    

@dataclass
class OptCapProgramInPriceRequest:
    headers: OptCapProgramInPriceHeaders = field(default=None)
    request: OptCapProgramInPriceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class OptCapProgramInPrice200ApplicationJSONStatusInfo:
    subsidy_enrolled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subsidyEnrolled' }})
    subsidy_preference: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subsidyPreference' }})
    

@dataclass_json
@dataclass
class OptCapProgramInPrice200ApplicationJSON:
    mart_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'martId' }})
    status_info: Optional[OptCapProgramInPrice200ApplicationJSONStatusInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusInfo' }})
    

@dataclass
class OptCapProgramInPriceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    opt_cap_program_in_price_200_application_json_object: Optional[OptCapProgramInPrice200ApplicationJSON] = field(default=None)
    
