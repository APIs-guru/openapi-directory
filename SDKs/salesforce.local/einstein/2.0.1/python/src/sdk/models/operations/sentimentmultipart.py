from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SentimentMultipartRequests:
    sentiment_predict_request: Optional[shared.SentimentPredictRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    sentiment_predict_request1: Optional[shared.SentimentPredictRequest] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class SentimentMultipartSecurity:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class SentimentMultipartRequest:
    request: Optional[SentimentMultipartRequests] = field(default=None)
    security: SentimentMultipartSecurity = field(default=None)
    

@dataclass
class SentimentMultipartResponse:
    content_type: str = field(default=None)
    sentiment_predict_response: Optional[shared.SentimentPredictResponse] = field(default=None)
    status_code: int = field(default=None)
    
