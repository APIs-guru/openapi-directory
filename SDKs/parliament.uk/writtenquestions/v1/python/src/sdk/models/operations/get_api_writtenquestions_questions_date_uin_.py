from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIWrittenquestionsQuestionsDateUinPathParams:
    date: datetime = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    uin: str = field(default=None, metadata={'path_param': { 'field_name': 'uin', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIWrittenquestionsQuestionsDateUinQueryParams:
    expand_member: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'expandMember', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIWrittenquestionsQuestionsDateUinRequest:
    path_params: GetAPIWrittenquestionsQuestionsDateUinPathParams = field(default=None)
    query_params: GetAPIWrittenquestionsQuestionsDateUinQueryParams = field(default=None)
    

@dataclass
class GetAPIWrittenquestionsQuestionsDateUinResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, dict[str, Any]]] = field(default=None)
    questions_view_model_item: Optional[shared.QuestionsViewModelItem] = field(default=None)
    status_code: int = field(default=None)
    
