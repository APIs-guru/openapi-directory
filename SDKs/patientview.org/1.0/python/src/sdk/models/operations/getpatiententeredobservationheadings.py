from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPatientEnteredObservationHeadingsPathParams:
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientEnteredObservationHeadingsRequest:
    path_params: GetPatientEnteredObservationHeadingsPathParams = field(default=None)
    

@dataclass
class GetPatientEnteredObservationHeadingsResponse:
    content_type: str = field(default=None)
    observation_headings: Optional[List[shared.ObservationHeading]] = field(default=None)
    status_code: int = field(default=None)
    
