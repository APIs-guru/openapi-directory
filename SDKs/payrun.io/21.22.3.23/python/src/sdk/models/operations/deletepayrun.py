from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeletePayRunPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_run_id: str = field(metadata={'path_param': { 'field_name': 'PayRunId', 'style': 'simple', 'explode': False }})
    pay_schedule_id: str = field(metadata={'path_param': { 'field_name': 'PayScheduleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePayRunHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePayRunRequest:
    headers: DeletePayRunHeaders = field()
    path_params: DeletePayRunPathParams = field()
    

@dataclass
class DeletePayRunResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
