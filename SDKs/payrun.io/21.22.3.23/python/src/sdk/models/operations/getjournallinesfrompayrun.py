from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetJournalLinesFromPayRunPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_run_id: str = field(metadata={'path_param': { 'field_name': 'PayRunId', 'style': 'simple', 'explode': False }})
    pay_schedule_id: str = field(metadata={'path_param': { 'field_name': 'PayScheduleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJournalLinesFromPayRunHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJournalLinesFromPayRunRequest:
    headers: GetJournalLinesFromPayRunHeaders = field()
    path_params: GetJournalLinesFromPayRunPathParams = field()
    

@dataclass
class GetJournalLinesFromPayRunResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    
