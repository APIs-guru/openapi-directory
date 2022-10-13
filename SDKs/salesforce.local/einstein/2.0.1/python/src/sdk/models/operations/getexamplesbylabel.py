from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetExamplesByLabelQueryParams:
    count: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    label_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'labelId', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetExamplesByLabelSecurity:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetExamplesByLabelRequest:
    query_params: GetExamplesByLabelQueryParams = field(default=None)
    security: GetExamplesByLabelSecurity = field(default=None)
    

@dataclass
class GetExamplesByLabelResponse:
    content_type: str = field(default=None)
    example_list: Optional[shared.ExampleList] = field(default=None)
    status_code: int = field(default=None)
    
