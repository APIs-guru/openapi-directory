from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTagFromPaySchedulePathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_schedule_id: str = field(metadata={'path_param': { 'field_name': 'PayScheduleId', 'style': 'simple', 'explode': False }})
    tag_id: str = field(metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagFromPayScheduleHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagFromPayScheduleRequest:
    headers: GetTagFromPayScheduleHeaders = field()
    path_params: GetTagFromPaySchedulePathParams = field()
    

@dataclass
class GetTagFromPayScheduleResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
