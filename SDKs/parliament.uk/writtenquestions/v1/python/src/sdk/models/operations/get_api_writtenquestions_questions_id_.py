from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIWrittenquestionsQuestionsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIWrittenquestionsQuestionsIDQueryParams:
    expand_member: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'expandMember', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIWrittenquestionsQuestionsIDRequest:
    path_params: GetAPIWrittenquestionsQuestionsIDPathParams = field()
    query_params: GetAPIWrittenquestionsQuestionsIDQueryParams = field()
    

@dataclass
class GetAPIWrittenquestionsQuestionsIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, dict[str, Any]]] = field(default=None)
    questions_view_model_item: Optional[shared.QuestionsViewModelItem] = field(default=None)
    
