from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIWrittenstatementsStatementsDateUinPathParams:
    date_: datetime = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    uin: str = field(metadata={'path_param': { 'field_name': 'uin', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIWrittenstatementsStatementsDateUinQueryParams:
    expand_member: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'expandMember', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIWrittenstatementsStatementsDateUinRequest:
    path_params: GetAPIWrittenstatementsStatementsDateUinPathParams = field()
    query_params: GetAPIWrittenstatementsStatementsDateUinQueryParams = field()
    

@dataclass
class GetAPIWrittenstatementsStatementsDateUinResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, dict[str, Any]]] = field(default=None)
    statements_view_model_item: Optional[shared.StatementsViewModelItem] = field(default=None)
    
