from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIWrittenquestionsQuestionsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIWrittenquestionsQuestionsIDQueryParams:
    expand_member: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'expandMember', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIWrittenquestionsQuestionsIDRequest:
    path_params: GetAPIWrittenquestionsQuestionsIDPathParams = field(default=None)
    query_params: GetAPIWrittenquestionsQuestionsIDQueryParams = field(default=None)
    

@dataclass
class GetAPIWrittenquestionsQuestionsIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, dict[str, Any]]] = field(default=None)
    questions_view_model_item: Optional[shared.QuestionsViewModelItem] = field(default=None)
    status_code: int = field(default=None)
    
