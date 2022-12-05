from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared
from sdk.models import shared


@dataclass
class ExecuteSwitchTrasactionHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    
class ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum(str, Enum):
    PERCENTAGE = "percentage"
    UNIT = "unit"
    VALUE = "value"


@dataclass_json
@dataclass
class ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest:
    r"""ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest
    Each individual buy side and sell side instruction of the Switch request
    """
    
    investment_product_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('investment_product_id') }})
    mode: ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ExecuteSwitchTrasactionSwitchInstructionRequest:
    r"""ExecuteSwitchTrasactionSwitchInstructionRequest
    Definition of Switch instruction
    """
    
    buy_instructions: list[ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('buy_instructions') }})
    pot_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pot_id') }})
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    sell_instructions: list[ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sell_instructions') }})
    

@dataclass
class ExecuteSwitchTrasactionSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ExecuteSwitchTrasactionRequest:
    headers: ExecuteSwitchTrasactionHeaders = field()
    security: ExecuteSwitchTrasactionSecurity = field()
    request: Optional[ExecuteSwitchTrasactionSwitchInstructionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExecuteSwitchTrasactionResponse:
    content_type: str = field()
    status_code: int = field()
    execute_switch_trasaction_200_application_json_any: Optional[Any] = field(default=None)
    execute_switch_trasaction_400_application_json_any: Optional[Any] = field(default=None)
    execute_switch_trasaction_401_application_json_any: Optional[Any] = field(default=None)
    execute_switch_trasaction_403_application_json_any: Optional[Any] = field(default=None)
    execute_switch_trasaction_404_application_json_any: Optional[Any] = field(default=None)
    execute_switch_trasaction_409_application_json_any: Optional[Any] = field(default=None)
    execute_switch_trasaction_429_application_json_any: Optional[Any] = field(default=None)
    execute_switch_trasaction_500_application_json_any: Optional[Any] = field(default=None)
    
