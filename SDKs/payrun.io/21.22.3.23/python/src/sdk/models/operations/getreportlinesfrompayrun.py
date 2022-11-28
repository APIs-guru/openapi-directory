from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReportLinesFromPayRunPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_run_id: str = field(metadata={'path_param': { 'field_name': 'PayRunId', 'style': 'simple', 'explode': False }})
    pay_schedule_id: str = field(metadata={'path_param': { 'field_name': 'PayScheduleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportLinesFromPayRunHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportLinesFromPayRunRequest:
    headers: GetReportLinesFromPayRunHeaders = field()
    path_params: GetReportLinesFromPayRunPathParams = field()
    

@dataclass
class GetReportLinesFromPayRunResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    
