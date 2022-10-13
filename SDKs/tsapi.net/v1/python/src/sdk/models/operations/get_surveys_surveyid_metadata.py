from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSurveysSurveyIDMetadataPathParams:
    survey_id: str = field(default=None, metadata={'path_param': { 'field_name': 'surveyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSurveysSurveyIDMetadataRequest:
    path_params: GetSurveysSurveyIDMetadataPathParams = field(default=None)
    

@dataclass
class GetSurveysSurveyIDMetadataResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    survey_metadata: Optional[shared.SurveyMetadata] = field(default=None)
    
