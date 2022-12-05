from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared
from sdk.models import shared


@dataclass
class CreateRebalanceHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    
class CreateRebalanceSwitchInstructionRequestTypeEnum(str, Enum):
    POT = "pot"
    INVESTOR = "investor"
    PORTFOLIO = "portfolio"


@dataclass_json
@dataclass
class CreateRebalanceSwitchInstructionRequest:
    r"""CreateRebalanceSwitchInstructionRequest
    Definition of Switch instruction
    """
    
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    type: CreateRebalanceSwitchInstructionRequestTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    values: list[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    

@dataclass
class CreateRebalanceSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateRebalanceRequest:
    headers: CreateRebalanceHeaders = field()
    security: CreateRebalanceSecurity = field()
    request: Optional[CreateRebalanceSwitchInstructionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateRebalanceResponse:
    content_type: str = field()
    status_code: int = field()
    create_rebalance_201_application_json_any: Optional[Any] = field(default=None)
    create_rebalance_400_application_json_any: Optional[Any] = field(default=None)
    create_rebalance_401_application_json_any: Optional[Any] = field(default=None)
    create_rebalance_403_application_json_any: Optional[Any] = field(default=None)
    create_rebalance_404_application_json_any: Optional[Any] = field(default=None)
    create_rebalance_409_application_json_any: Optional[Any] = field(default=None)
    create_rebalance_429_application_json_any: Optional[Any] = field(default=None)
    create_rebalance_500_application_json_any: Optional[Any] = field(default=None)
    
