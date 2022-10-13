from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIWrittenstatementsStatementsDateUinPathParams:
    date: datetime = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    uin: str = field(default=None, metadata={'path_param': { 'field_name': 'uin', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIWrittenstatementsStatementsDateUinQueryParams:
    expand_member: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'expandMember', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIWrittenstatementsStatementsDateUinRequest:
    path_params: GetAPIWrittenstatementsStatementsDateUinPathParams = field(default=None)
    query_params: GetAPIWrittenstatementsStatementsDateUinQueryParams = field(default=None)
    

@dataclass
class GetAPIWrittenstatementsStatementsDateUinResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, dict[str, Any]]] = field(default=None)
    statements_view_model_item: Optional[shared.StatementsViewModelItem] = field(default=None)
    status_code: int = field(default=None)
    
