from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetExamplesPathParams:
    dataset_id: str = field(default=None, metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    
class GetExamplesSourceEnum(str, Enum):
    ALL = "all"
    FEEDBACK = "feedback"
    UPLOAD = "upload"


@dataclass
class GetExamplesQueryParams:
    count: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    source: Optional[GetExamplesSourceEnum] = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    

@dataclass
class GetExamplesSecurity:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetExamplesRequest:
    path_params: GetExamplesPathParams = field(default=None)
    query_params: GetExamplesQueryParams = field(default=None)
    security: GetExamplesSecurity = field(default=None)
    

@dataclass
class GetExamplesResponse:
    content_type: str = field(default=None)
    example_list: Optional[shared.ExampleList] = field(default=None)
    status_code: int = field(default=None)
    
