from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AddOrDeleteRulesQueryParams:
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'dry_run', 'style': 'form', 'explode': True }})
    

@dataclass
class AddOrDeleteRulesRequest:
    query_params: AddOrDeleteRulesQueryParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddOrDeleteRulesResponse:
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    problem: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    add_or_delete_rules_200_application_json_one_of: Optional[Any] = field(default=None)
    
