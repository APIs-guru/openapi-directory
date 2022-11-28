from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayRunsFromPaySchedulePathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_schedule_id: str = field(metadata={'path_param': { 'field_name': 'PayScheduleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayRunsFromPayScheduleHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayRunsFromPayScheduleRequest:
    headers: GetPayRunsFromPayScheduleHeaders = field()
    path_params: GetPayRunsFromPaySchedulePathParams = field()
    

@dataclass
class GetPayRunsFromPayScheduleResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    
