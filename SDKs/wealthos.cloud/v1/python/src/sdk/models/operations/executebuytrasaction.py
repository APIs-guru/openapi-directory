from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared
from sdk.models import shared


@dataclass
class ExecuteBuyTrasactionHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell:
    r"""ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell
    Definition of an single instruction(buy|sell)
    """
    
    investment_product_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('investment_product_id') }})
    client_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_order_id') }})
    quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ExecuteBuyTrasactionBuyTransactionRequest:
    r"""ExecuteBuyTrasactionBuyTransactionRequest
    Definition of an buy transaction request
    """
    
    investment_instructions: list[ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('investment_instructions') }})
    pot_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pot_id') }})
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclass
class ExecuteBuyTrasactionSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ExecuteBuyTrasactionRequest:
    headers: ExecuteBuyTrasactionHeaders = field()
    security: ExecuteBuyTrasactionSecurity = field()
    request: Optional[ExecuteBuyTrasactionBuyTransactionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExecuteBuyTrasactionResponse:
    content_type: str = field()
    status_code: int = field()
    execute_buy_trasaction_200_application_json_any: Optional[Any] = field(default=None)
    execute_buy_trasaction_400_application_json_any: Optional[Any] = field(default=None)
    execute_buy_trasaction_401_application_json_any: Optional[Any] = field(default=None)
    execute_buy_trasaction_403_application_json_any: Optional[Any] = field(default=None)
    execute_buy_trasaction_404_application_json_any: Optional[Any] = field(default=None)
    execute_buy_trasaction_409_application_json_any: Optional[Any] = field(default=None)
    execute_buy_trasaction_429_application_json_any: Optional[Any] = field(default=None)
    execute_buy_trasaction_500_application_json_any: Optional[Any] = field(default=None)
    
