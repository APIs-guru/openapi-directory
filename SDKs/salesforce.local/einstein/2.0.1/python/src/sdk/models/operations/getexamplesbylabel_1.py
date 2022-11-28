from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetExamplesByLabel1QueryParams:
    count: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    label_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'labelId', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetExamplesByLabel1Security:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetExamplesByLabel1Request:
    query_params: GetExamplesByLabel1QueryParams = field()
    security: GetExamplesByLabel1Security = field()
    

@dataclass
class GetExamplesByLabel1Response:
    content_type: str = field()
    status_code: int = field()
    example_list: Optional[shared.ExampleList] = field(default=None)
    
