from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import linktokencreaterequestauth
from . import countrycode_enum
from . import linktokencreaterequestdepositswitch
from . import linktokeneuconfig
from . import linktokencreaterequestincomeverification
from . import linktokencreaterequestpaymentinitiation
from . import products_enum
from . import linktokencreaterequestuser


@dataclass_json
@dataclass
class LinkTokenCreateRequest:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    account_filters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_filters' }})
    android_package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'android_package_name' }})
    auth: Optional[linktokencreaterequestauth.LinkTokenCreateRequestAuth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    client_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_name' }})
    country_codes: List[countrycode_enum.CountryCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_codes' }})
    deposit_switch: Optional[linktokencreaterequestdepositswitch.LinkTokenCreateRequestDepositSwitch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deposit_switch' }})
    eu_config: Optional[linktokeneuconfig.LinkTokenEuConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eu_config' }})
    income_verification: Optional[linktokencreaterequestincomeverification.LinkTokenCreateRequestIncomeVerification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'income_verification' }})
    institution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'institution_id' }})
    language: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    link_customization_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link_customization_name' }})
    payment_initiation: Optional[linktokencreaterequestpaymentinitiation.LinkTokenCreateRequestPaymentInitiation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_initiation' }})
    products: Optional[List[products_enum.ProductsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_uri' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    user: linktokencreaterequestuser.LinkTokenCreateRequestUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    webhook: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook' }})
    
