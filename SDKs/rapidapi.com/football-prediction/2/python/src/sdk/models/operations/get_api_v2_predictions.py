from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetAPIV2PredictionsHeaders:
    x_rapid_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-RapidApi-Key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetAPIV2Predictions404ApplicationJSON:
    errors: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetAPIV2PredictionsRequest:
    headers: GetAPIV2PredictionsHeaders = field()
    

@dataclass
class GetAPIV2PredictionsResponse:
    content_type: str = field()
    status_code: int = field()
    get_api_v2_predictions_404_application_json_object: Optional[GetAPIV2Predictions404ApplicationJSON] = field(default=None)
    
