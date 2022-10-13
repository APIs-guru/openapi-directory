from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTagsFromJournalLinePathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    journal_line_id: str = field(default=None, metadata={'path_param': { 'field_name': 'JournalLineId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsFromJournalLineHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetTagsFromJournalLineRequest:
    path_params: GetTagsFromJournalLinePathParams = field(default=None)
    headers: GetTagsFromJournalLineHeaders = field(default=None)
    

@dataclass
class GetTagsFromJournalLineResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    status_code: int = field(default=None)
    
