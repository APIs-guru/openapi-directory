from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPatientEnteredObservationHeadingsPathParams:
    user_id: int = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientEnteredObservationHeadingsRequest:
    path_params: GetPatientEnteredObservationHeadingsPathParams = field()
    

@dataclass
class GetPatientEnteredObservationHeadingsResponse:
    content_type: str = field()
    status_code: int = field()
    observation_headings: Optional[List[shared.ObservationHeading]] = field(default=None)
    
