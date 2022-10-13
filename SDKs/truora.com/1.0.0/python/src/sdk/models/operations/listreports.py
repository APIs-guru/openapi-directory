from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListReportsQueryParams:
    start_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start_key', 'style': 'form', 'explode': True }})
    username: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclass
class ListReportsRequest:
    query_params: ListReportsQueryParams = field(default=None)
    

@dataclass
class ListReportsResponse:
    content_type: str = field(default=None)
    reports_output: Optional[shared.ReportsOutput] = field(default=None)
    status_code: int = field(default=None)
    
