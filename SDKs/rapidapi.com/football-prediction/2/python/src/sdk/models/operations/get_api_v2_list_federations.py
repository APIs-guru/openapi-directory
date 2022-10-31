from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetAPIV2ListFederationsHeaders:
    x_rapid_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-RapidApi-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV2ListFederationsRequest:
    headers: GetAPIV2ListFederationsHeaders = field(default=None)
    

@dataclass_json
@dataclass
class GetAPIV2ListFederations200ApplicationJSON:
    data: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass_json
@dataclass
class GetAPIV2ListFederations404ApplicationJSON:
    errors: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetAPIV2ListFederationsResponse:
    content_type: str = field(default=None)
    get_api_v2_list_federations_200_application_json_object: Optional[GetAPIV2ListFederations200ApplicationJSON] = field(default=None)
    get_api_v2_list_federations_404_application_json_object: Optional[GetAPIV2ListFederations404ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
