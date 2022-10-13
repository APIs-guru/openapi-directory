from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIWrittenstatementsStatementsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIWrittenstatementsStatementsIDQueryParams:
    expand_member: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'expandMember', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIWrittenstatementsStatementsIDRequest:
    path_params: GetAPIWrittenstatementsStatementsIDPathParams = field(default=None)
    query_params: GetAPIWrittenstatementsStatementsIDQueryParams = field(default=None)
    

@dataclass
class GetAPIWrittenstatementsStatementsIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, dict[str, Any]]] = field(default=None)
    statements_view_model_search_result: Optional[shared.StatementsViewModelSearchResult] = field(default=None)
    status_code: int = field(default=None)
    
