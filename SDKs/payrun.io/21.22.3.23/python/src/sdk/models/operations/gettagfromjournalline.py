from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTagFromJournalLinePathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    journal_line_id: str = field(default=None, metadata={'path_param': { 'field_name': 'JournalLineId', 'style': 'simple', 'explode': False }})
    tag_id: str = field(default=None, metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagFromJournalLineHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagFromJournalLineRequest:
    path_params: GetTagFromJournalLinePathParams = field(default=None)
    headers: GetTagFromJournalLineHeaders = field(default=None)
    

@dataclass
class GetTagFromJournalLineResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
