from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListDatasets1QueryParams:
    count: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    global_: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'global', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDatasets1Security:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ListDatasets1Request:
    query_params: ListDatasets1QueryParams = field()
    security: ListDatasets1Security = field()
    

@dataclass
class ListDatasets1Response:
    content_type: str = field()
    status_code: int = field()
    dataset_list: Optional[shared.DatasetList] = field(default=None)
    
