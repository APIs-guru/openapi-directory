from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListChecksQueryParams:
    report_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'report_id', 'style': 'form', 'explode': True }})
    start_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start_key', 'style': 'form', 'explode': True }})
    

@dataclass
class ListChecksSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListChecksRequest:
    query_params: ListChecksQueryParams = field(default=None)
    security: ListChecksSecurity = field(default=None)
    

@dataclass
class ListChecksResponse:
    checks_output: Optional[shared.ChecksOutput] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
