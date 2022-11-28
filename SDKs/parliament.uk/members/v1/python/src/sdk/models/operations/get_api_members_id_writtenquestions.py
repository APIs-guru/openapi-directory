from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDWrittenQuestionsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDWrittenQuestionsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIMembersIDWrittenQuestionsRequest:
    path_params: GetAPIMembersIDWrittenQuestionsPathParams = field()
    query_params: GetAPIMembersIDWrittenQuestionsQueryParams = field()
    

@dataclass
class GetAPIMembersIDWrittenQuestionsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    written_question_members_service_search_result: Optional[shared.WrittenQuestionMembersServiceSearchResult] = field(default=None)
    
