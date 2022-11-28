from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetAPIV2PredictionsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetAPIV2PredictionsID200ApplicationJSON:
    data: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class GetAPIV2PredictionsID404ApplicationJSON:
    errors: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetAPIV2PredictionsIDRequest:
    path_params: GetAPIV2PredictionsIDPathParams = field()
    

@dataclass
class GetAPIV2PredictionsIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_api_v2_predictions_id_200_application_json_object: Optional[GetAPIV2PredictionsID200ApplicationJSON] = field(default=None)
    get_api_v2_predictions_id_404_application_json_object: Optional[GetAPIV2PredictionsID404ApplicationJSON] = field(default=None)
    
