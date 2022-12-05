from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared
from sdk.models import shared


@dataclass
class GetAllinvestorAccountsQueryParams:
    account_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'account_id', 'style': 'form', 'explode': True }})
    financial_product_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'financial_product_id', 'style': 'form', 'explode': True }})
    investor_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'investor_id', 'style': 'form', 'explode': True }})
    page_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_number', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAllinvestorAccountsHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllinvestorAccountsSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclass
class GetAllinvestorAccounts200ApplicationJSON:
    r"""GetAllinvestorAccounts200ApplicationJSON
    Array of investor accounts
    """
    
    investor_accounts: Optional[list[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('investor_accounts') }})
    next_page_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_available') }})
    

@dataclass
class GetAllinvestorAccountsRequest:
    headers: GetAllinvestorAccountsHeaders = field()
    query_params: GetAllinvestorAccountsQueryParams = field()
    security: GetAllinvestorAccountsSecurity = field()
    

@dataclass
class GetAllinvestorAccountsResponse:
    content_type: str = field()
    status_code: int = field()
    get_allinvestor_accounts_200_application_json_object: Optional[GetAllinvestorAccounts200ApplicationJSON] = field(default=None)
    get_allinvestor_accounts_400_application_json_any: Optional[Any] = field(default=None)
    get_allinvestor_accounts_401_application_json_any: Optional[Any] = field(default=None)
    get_allinvestor_accounts_403_application_json_any: Optional[Any] = field(default=None)
    get_allinvestor_accounts_404_application_json_any: Optional[Any] = field(default=None)
    get_allinvestor_accounts_409_application_json_any: Optional[Any] = field(default=None)
    get_allinvestor_accounts_429_application_json_any: Optional[Any] = field(default=None)
    get_allinvestor_accounts_500_application_json_any: Optional[Any] = field(default=None)
    
