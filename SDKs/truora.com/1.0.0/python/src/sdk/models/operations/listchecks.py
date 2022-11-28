from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListChecksQueryParams:
    report_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'report_id', 'style': 'form', 'explode': True }})
    start_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start_key', 'style': 'form', 'explode': True }})
    

@dataclass
class ListChecksSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListChecksRequest:
    query_params: ListChecksQueryParams = field()
    security: ListChecksSecurity = field()
    

@dataclass
class ListChecksResponse:
    content_type: str = field()
    status_code: int = field()
    checks_output: Optional[shared.ChecksOutput] = field(default=None)
    
