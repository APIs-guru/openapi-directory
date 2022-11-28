from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LinkTokenCreateRequest:
    r"""LinkTokenCreateRequest
    LinkTokenCreateRequest defines the request schema for `/link/token/create`
    """
    
    client_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_name') }})
    country_codes: List[CountryCodeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_codes') }})
    language: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    user: LinkTokenCreateRequestUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    account_filters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_filters') }})
    android_package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('android_package_name') }})
    auth: Optional[LinkTokenCreateRequestAuth] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    deposit_switch: Optional[LinkTokenCreateRequestDepositSwitch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deposit_switch') }})
    eu_config: Optional[LinkTokenEuConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eu_config') }})
    income_verification: Optional[LinkTokenCreateRequestIncomeVerification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('income_verification') }})
    institution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('institution_id') }})
    link_customization_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link_customization_name') }})
    payment_initiation: Optional[LinkTokenCreateRequestPaymentInitiation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_initiation') }})
    products: Optional[List[ProductsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_uri') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    webhook: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    
