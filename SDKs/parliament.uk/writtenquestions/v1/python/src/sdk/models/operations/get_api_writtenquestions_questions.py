from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class GetAPIWrittenquestionsQuestionsQueryParams:
    answered: Optional[shared.AnsweredEnum] = field(default=None, metadata={'query_param': { 'field_name': 'answered', 'style': 'form', 'explode': True }})
    answered_when_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'answeredWhenFrom', 'style': 'form', 'explode': True }})
    answered_when_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'answeredWhenTo', 'style': 'form', 'explode': True }})
    answering_bodies: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'answeringBodies', 'style': 'form', 'explode': True }})
    answering_member_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'answeringMemberId', 'style': 'form', 'explode': True }})
    asking_member_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'askingMemberId', 'style': 'form', 'explode': True }})
    corrected_when_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'correctedWhenFrom', 'style': 'form', 'explode': True }})
    corrected_when_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'correctedWhenTo', 'style': 'form', 'explode': True }})
    expand_member: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'expandMember', 'style': 'form', 'explode': True }})
    house: Optional[shared.HouseEnumEnum] = field(default=None, metadata={'query_param': { 'field_name': 'house', 'style': 'form', 'explode': True }})
    include_withdrawn: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeWithdrawn', 'style': 'form', 'explode': True }})
    members: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'members', 'style': 'form', 'explode': True }})
    question_status: Optional[shared.QuestionStatusEnumEnum] = field(default=None, metadata={'query_param': { 'field_name': 'questionStatus', 'style': 'form', 'explode': True }})
    search_term: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchTerm', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    tabled_when_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'tabledWhenFrom', 'style': 'form', 'explode': True }})
    tabled_when_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'tabledWhenTo', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    u_in: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uIN', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIWrittenquestionsQuestionsRequest:
    query_params: GetAPIWrittenquestionsQuestionsQueryParams = field(default=None)
    

@dataclass
class GetAPIWrittenquestionsQuestionsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, dict[str, Any]]] = field(default=None)
    questions_view_model_search_result: Optional[shared.QuestionsViewModelSearchResult] = field(default=None)
    status_code: int = field(default=None)
    
