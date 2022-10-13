from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAvailableObservationHeadingsPathParams:
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAvailableObservationHeadingsRequest:
    path_params: GetAvailableObservationHeadingsPathParams = field(default=None)
    

@dataclass
class GetAvailableObservationHeadingsResponse:
    content_type: str = field(default=None)
    observation_headings: Optional[List[shared.ObservationHeading]] = field(default=None)
    status_code: int = field(default=None)
    
