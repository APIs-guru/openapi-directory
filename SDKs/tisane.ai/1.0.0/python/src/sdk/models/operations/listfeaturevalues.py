from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ListFeatureValuesQueryParams:
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class ListFeatureValuesRequest:
    query_params: ListFeatureValuesQueryParams = field()
    

@dataclass
class ListFeatureValuesResponse:
    content_type: str = field()
    status_code: int = field()
    list_feature_values_200_application_json_strings: Optional[List[str]] = field(default=None)
    
