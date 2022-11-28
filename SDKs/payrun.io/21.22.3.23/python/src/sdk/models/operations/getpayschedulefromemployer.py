from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayScheduleFromEmployerPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_schedule_id: str = field(metadata={'path_param': { 'field_name': 'PayScheduleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayScheduleFromEmployerHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayScheduleFromEmployerRequest:
    headers: GetPayScheduleFromEmployerHeaders = field()
    path_params: GetPayScheduleFromEmployerPathParams = field()
    

@dataclass
class GetPayScheduleFromEmployerResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    pay_schedule: Optional[shared.PaySchedule] = field(default=None)
    
