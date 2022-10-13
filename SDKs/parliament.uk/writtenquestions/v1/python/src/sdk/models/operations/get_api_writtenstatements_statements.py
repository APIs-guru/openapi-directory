from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class GetAPIWrittenstatementsStatementsQueryParams:
    answering_bodies: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'answeringBodies', 'style': 'form', 'explode': True }})
    expand_member: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'expandMember', 'style': 'form', 'explode': True }})
    house: Optional[shared.HouseEnumEnum] = field(default=None, metadata={'query_param': { 'field_name': 'house', 'style': 'form', 'explode': True }})
    made_when_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'madeWhenFrom', 'style': 'form', 'explode': True }})
    made_when_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'madeWhenTo', 'style': 'form', 'explode': True }})
    members: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'members', 'style': 'form', 'explode': True }})
    search_term: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchTerm', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    u_in: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uIN', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIWrittenstatementsStatementsRequest:
    query_params: GetAPIWrittenstatementsStatementsQueryParams = field(default=None)
    

@dataclass
class GetAPIWrittenstatementsStatementsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, dict[str, Any]]] = field(default=None)
    statements_view_model_search_result: Optional[shared.StatementsViewModelSearchResult] = field(default=None)
    status_code: int = field(default=None)
    
