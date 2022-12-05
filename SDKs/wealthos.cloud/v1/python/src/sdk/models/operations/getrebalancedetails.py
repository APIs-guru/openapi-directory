from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class GetRebalanceDetailsPathParams:
    rebalance_request_id: str = field(metadata={'path_param': { 'field_name': 'rebalance_request_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRebalanceDetailsHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRebalanceDetailsSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRebalanceDetailsRequest:
    headers: GetRebalanceDetailsHeaders = field()
    path_params: GetRebalanceDetailsPathParams = field()
    security: GetRebalanceDetailsSecurity = field()
    

@dataclass
class GetRebalanceDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    get_rebalance_details_200_application_json_any: Optional[Any] = field(default=None)
    get_rebalance_details_400_application_json_any: Optional[Any] = field(default=None)
    get_rebalance_details_401_application_json_any: Optional[Any] = field(default=None)
    get_rebalance_details_403_application_json_any: Optional[Any] = field(default=None)
    get_rebalance_details_404_application_json_any: Optional[Any] = field(default=None)
    get_rebalance_details_409_application_json_any: Optional[Any] = field(default=None)
    get_rebalance_details_429_application_json_any: Optional[Any] = field(default=None)
    get_rebalance_details_500_application_json_any: Optional[Any] = field(default=None)
    
