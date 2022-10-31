from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutPaySchedulePathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_schedule_id: str = field(default=None, metadata={'path_param': { 'field_name': 'PayScheduleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPayScheduleHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPayScheduleRequest:
    path_params: PutPaySchedulePathParams = field(default=None)
    headers: PutPayScheduleHeaders = field(default=None)
    request: shared.PaySchedule = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutPayScheduleResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    pay_schedule: Optional[shared.PaySchedule] = field(default=None)
    status_code: int = field(default=None)
    
