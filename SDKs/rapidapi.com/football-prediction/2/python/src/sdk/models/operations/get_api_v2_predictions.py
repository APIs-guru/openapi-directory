from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetAPIV2PredictionsHeaders:
    x_rapid_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-RapidApi-Key' }})
    

@dataclass
class GetAPIV2PredictionsRequest:
    headers: GetAPIV2PredictionsHeaders = field(default=None)
    

@dataclass_json
@dataclass
class GetAPIV2Predictions404ApplicationJSON:
    errors: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetAPIV2PredictionsResponse:
    content_type: str = field(default=None)
    get_api_v2_predictions_404_application_json_object: Optional[GetAPIV2Predictions404ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
