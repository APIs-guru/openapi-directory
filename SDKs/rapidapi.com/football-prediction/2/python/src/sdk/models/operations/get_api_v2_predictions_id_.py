from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetAPIV2PredictionsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV2PredictionsIDRequest:
    path_params: GetAPIV2PredictionsIDPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetAPIV2PredictionsID200ApplicationJSON:
    data: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass_json
@dataclass
class GetAPIV2PredictionsID404ApplicationJSON:
    errors: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetAPIV2PredictionsIDResponse:
    content_type: str = field(default=None)
    get_api_v2_predictions_id_200_application_json_object: Optional[GetAPIV2PredictionsID200ApplicationJSON] = field(default=None)
    get_api_v2_predictions_id_404_application_json_object: Optional[GetAPIV2PredictionsID404ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
