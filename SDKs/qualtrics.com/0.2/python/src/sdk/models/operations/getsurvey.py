from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSurveyPathParams:
    survey_id: str = field(metadata={'path_param': { 'field_name': 'SurveyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSurveyRequest:
    path_params: GetSurveyPathParams = field()
    

@dataclass
class GetSurveyResponse:
    content_type: str = field()
    status_code: int = field()
    survey_response: Optional[dict[str, Any]] = field(default=None)
    
