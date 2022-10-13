from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ResourcesAPIGetListPathParams:
    culture_code: str = field(default=None, metadata={'path_param': { 'field_name': 'cultureCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResourcesAPIGetListQueryParams:
    set_names: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'setNames', 'style': 'form', 'explode': True }})
    

@dataclass
class ResourcesAPIGetListRequest:
    path_params: ResourcesAPIGetListPathParams = field(default=None)
    query_params: ResourcesAPIGetListQueryParams = field(default=None)
    

@dataclass
class ResourcesAPIGetListResponse:
    content_type: str = field(default=None)
    resources_api_get_list_200_application_json_object: Optional[dict[str, dict[str, str]]] = field(default=None)
    resources_api_get_list_200_text_json_object: Optional[dict[str, dict[str, str]]] = field(default=None)
    status_code: int = field(default=None)
    
