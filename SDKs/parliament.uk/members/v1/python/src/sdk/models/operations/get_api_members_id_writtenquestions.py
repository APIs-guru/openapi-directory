from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDWrittenQuestionsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDWrittenQuestionsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIMembersIDWrittenQuestionsRequest:
    path_params: GetAPIMembersIDWrittenQuestionsPathParams = field(default=None)
    query_params: GetAPIMembersIDWrittenQuestionsQueryParams = field(default=None)
    

@dataclass
class GetAPIMembersIDWrittenQuestionsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    written_question_members_service_search_result: Optional[shared.WrittenQuestionMembersServiceSearchResult] = field(default=None)
    
