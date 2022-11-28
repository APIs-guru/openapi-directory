from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SentimentMultipartRequests:
    sentiment_predict_request: Optional[shared.SentimentPredictRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    sentiment_predict_request1: Optional[shared.SentimentPredictRequest] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class SentimentMultipartSecurity:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class SentimentMultipartRequest:
    security: SentimentMultipartSecurity = field()
    request: Optional[SentimentMultipartRequests] = field(default=None)
    

@dataclass
class SentimentMultipartResponse:
    content_type: str = field()
    status_code: int = field()
    sentiment_predict_response: Optional[shared.SentimentPredictResponse] = field(default=None)
    
