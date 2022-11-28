from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetExamples1PathParams:
    dataset_id: str = field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    
class GetExamples1SourceEnum(str, Enum):
    ALL = "all"
    FEEDBACK = "feedback"
    UPLOAD = "upload"


@dataclass
class GetExamples1QueryParams:
    count: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    source: Optional[GetExamples1SourceEnum] = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    

@dataclass
class GetExamples1Security:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetExamples1Request:
    path_params: GetExamples1PathParams = field()
    query_params: GetExamples1QueryParams = field()
    security: GetExamples1Security = field()
    

@dataclass
class GetExamples1Response:
    content_type: str = field()
    status_code: int = field()
    example_list: Optional[shared.ExampleList] = field(default=None)
    
