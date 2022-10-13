from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EmotionQueryParams:
    all: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    

@dataclass
class EmotionRequest:
    query_params: EmotionQueryParams = field(default=None)
    request: Optional[List[shared.Post]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EmotionResponse:
    content_type: str = field(default=None)
    prediction_results: Optional[List[shared.PostPredicted]] = field(default=None)
    status_code: int = field(default=None)
    validation_errors: Optional[shared.ValidationErrors] = field(default=None)
    
