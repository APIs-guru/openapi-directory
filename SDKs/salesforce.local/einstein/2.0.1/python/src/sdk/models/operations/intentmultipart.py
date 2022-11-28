from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IntentMultipartRequests:
    intent_predict_request: Optional[shared.IntentPredictRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    intent_predict_request1: Optional[shared.IntentPredictRequest] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class IntentMultipartSecurity:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class IntentMultipartRequest:
    security: IntentMultipartSecurity = field()
    request: Optional[IntentMultipartRequests] = field(default=None)
    

@dataclass
class IntentMultipartResponse:
    content_type: str = field()
    status_code: int = field()
    intent_predict_response: Optional[shared.IntentPredictResponse] = field(default=None)
    prediction_error_response: Optional[shared.PredictionErrorResponse] = field(default=None)
    
