from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1ContinuousChecksContinuousCheckIDHistoryPathParams:
    continuous_check_id: str = field(default=None, metadata={'path_param': { 'field_name': 'continuous_check_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1ContinuousChecksContinuousCheckIDHistorySecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetV1ContinuousChecksContinuousCheckIDHistoryRequest:
    path_params: GetV1ContinuousChecksContinuousCheckIDHistoryPathParams = field(default=None)
    security: GetV1ContinuousChecksContinuousCheckIDHistorySecurity = field(default=None)
    

@dataclass
class GetV1ContinuousChecksContinuousCheckIDHistoryResponse:
    content_type: str = field(default=None)
    get_contiuous_check_history_output: Optional[shared.GetContiuousCheckHistoryOutput] = field(default=None)
    status_code: int = field(default=None)
    
