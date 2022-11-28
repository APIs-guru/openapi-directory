from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1ContinuousChecksContinuousCheckIDHistoryPathParams:
    continuous_check_id: str = field(metadata={'path_param': { 'field_name': 'continuous_check_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1ContinuousChecksContinuousCheckIDHistorySecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetV1ContinuousChecksContinuousCheckIDHistoryRequest:
    path_params: GetV1ContinuousChecksContinuousCheckIDHistoryPathParams = field()
    security: GetV1ContinuousChecksContinuousCheckIDHistorySecurity = field()
    

@dataclass
class GetV1ContinuousChecksContinuousCheckIDHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    get_contiuous_check_history_output: Optional[shared.GetContiuousCheckHistoryOutput] = field(default=None)
    
