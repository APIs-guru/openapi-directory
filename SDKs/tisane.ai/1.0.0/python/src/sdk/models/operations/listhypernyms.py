from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ListHypernymsQueryParams:
    family: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'family', 'style': 'form', 'explode': True }})
    max_level: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxLevel', 'style': 'form', 'explode': True }})
    

@dataclass
class ListHypernymsRequest:
    query_params: ListHypernymsQueryParams = field(default=None)
    

@dataclass
class ListHypernymsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_hypernyms_200_application_json_arrays: Optional[List[List[float]]] = field(default=None)
    
