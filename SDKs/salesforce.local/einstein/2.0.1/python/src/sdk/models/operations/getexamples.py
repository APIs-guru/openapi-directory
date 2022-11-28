from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetExamplesPathParams:
    dataset_id: str = field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    
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
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetExamplesRequest:
    path_params: GetExamplesPathParams = field()
    query_params: GetExamplesQueryParams = field()
    security: GetExamplesSecurity = field()
    

@dataclass
class GetExamplesResponse:
    content_type: str = field()
    status_code: int = field()
    example_list: Optional[shared.ExampleList] = field(default=None)
    
