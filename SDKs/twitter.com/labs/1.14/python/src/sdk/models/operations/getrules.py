from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetRulesQueryParams:
    ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRulesRequest:
    query_params: GetRulesQueryParams = field()
    

@dataclass
class GetRulesResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[Any] = field(default=None)
    get_rules_response: Optional[shared.GetRulesResponse] = field(default=None)
    problem: Optional[Any] = field(default=None)
    
