from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayRunFromPaySchedulePathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_run_id: str = field(default=None, metadata={'path_param': { 'field_name': 'PayRunId', 'style': 'simple', 'explode': False }})
    pay_schedule_id: str = field(default=None, metadata={'path_param': { 'field_name': 'PayScheduleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayRunFromPayScheduleHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetPayRunFromPayScheduleRequest:
    path_params: GetPayRunFromPaySchedulePathParams = field(default=None)
    headers: GetPayRunFromPayScheduleHeaders = field(default=None)
    

@dataclass
class GetPayRunFromPayScheduleResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    pay_run: Optional[shared.PayRun] = field(default=None)
    status_code: int = field(default=None)
    
