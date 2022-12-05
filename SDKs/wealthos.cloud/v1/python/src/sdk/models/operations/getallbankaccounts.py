from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared
from sdk.models import shared


@dataclass
class GetAllBankAccountsQueryParams:
    investor_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'investor_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAllBankAccountsHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllBankAccountsSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclass
class GetAllBankAccounts200ApplicationJSON:
    r"""GetAllBankAccounts200ApplicationJSON
    Array of bank accounts
    """
    
    bank_accounts: Optional[list[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bankAccounts') }})
    

@dataclass
class GetAllBankAccountsRequest:
    headers: GetAllBankAccountsHeaders = field()
    query_params: GetAllBankAccountsQueryParams = field()
    security: GetAllBankAccountsSecurity = field()
    

@dataclass
class GetAllBankAccountsResponse:
    content_type: str = field()
    status_code: int = field()
    get_all_bank_accounts_200_application_json_object: Optional[GetAllBankAccounts200ApplicationJSON] = field(default=None)
    get_all_bank_accounts_400_application_json_any: Optional[Any] = field(default=None)
    get_all_bank_accounts_401_application_json_any: Optional[Any] = field(default=None)
    get_all_bank_accounts_403_application_json_any: Optional[Any] = field(default=None)
    get_all_bank_accounts_404_application_json_any: Optional[Any] = field(default=None)
    get_all_bank_accounts_409_application_json_any: Optional[Any] = field(default=None)
    get_all_bank_accounts_429_application_json_any: Optional[Any] = field(default=None)
    get_all_bank_accounts_500_application_json_any: Optional[Any] = field(default=None)
    
