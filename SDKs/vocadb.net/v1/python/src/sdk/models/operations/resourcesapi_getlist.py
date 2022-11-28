from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ResourcesAPIGetListPathParams:
    culture_code: str = field(metadata={'path_param': { 'field_name': 'cultureCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResourcesAPIGetListQueryParams:
    set_names: List[str] = field(metadata={'query_param': { 'field_name': 'setNames', 'style': 'form', 'explode': True }})
    

@dataclass
class ResourcesAPIGetListRequest:
    path_params: ResourcesAPIGetListPathParams = field()
    query_params: ResourcesAPIGetListQueryParams = field()
    

@dataclass
class ResourcesAPIGetListResponse:
    content_type: str = field()
    status_code: int = field()
    resources_api_get_list_200_application_json_object: Optional[dict[str, dict[str, str]]] = field(default=None)
    resources_api_get_list_200_text_json_object: Optional[dict[str, dict[str, str]]] = field(default=None)
    
