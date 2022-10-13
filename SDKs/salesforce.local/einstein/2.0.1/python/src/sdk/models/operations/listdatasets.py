from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListDatasetsQueryParams:
    count: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    global_: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'global', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDatasetsSecurity:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ListDatasetsRequest:
    query_params: ListDatasetsQueryParams = field(default=None)
    security: ListDatasetsSecurity = field(default=None)
    

@dataclass
class ListDatasetsResponse:
    content_type: str = field(default=None)
    dataset_list: Optional[shared.DatasetList] = field(default=None)
    status_code: int = field(default=None)
    
