from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSurveyPathParams:
    survey_id: str = field(default=None, metadata={'path_param': { 'field_name': 'SurveyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSurveyRequest:
    path_params: GetSurveyPathParams = field(default=None)
    

@dataclass
class GetSurveyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    survey_response: Optional[dict[str, Any]] = field(default=None)
    
