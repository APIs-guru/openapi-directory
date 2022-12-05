from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared
from sdk.models import shared


@dataclass
class GetPotTransactionsPathParams:
    pot_id: str = field(metadata={'path_param': { 'field_name': 'pot_id', 'style': 'simple', 'explode': False }})
    
class GetPotTransactionsSortEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class GetPotTransactionsQueryParams:
    from_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    page_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_number', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    sort: Optional[GetPotTransactionsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sub_transaction_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sub_transaction_type', 'style': 'form', 'explode': True }})
    to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPotTransactionsHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPotTransactionsSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPotTransactionsRequest:
    headers: GetPotTransactionsHeaders = field()
    path_params: GetPotTransactionsPathParams = field()
    query_params: GetPotTransactionsQueryParams = field()
    security: GetPotTransactionsSecurity = field()
    

@dataclass
class GetPotTransactionsResponse:
    content_type: str = field()
    status_code: int = field()
    get_pot_transactions_200_application_json_any: Optional[Any] = field(default=None)
    get_pot_transactions_401_application_json_any: Optional[Any] = field(default=None)
    get_pot_transactions_403_application_json_any: Optional[Any] = field(default=None)
    get_pot_transactions_404_application_json_any: Optional[Any] = field(default=None)
    get_pot_transactions_429_application_json_any: Optional[Any] = field(default=None)
    get_pot_transactions_500_application_json_any: Optional[Any] = field(default=None)
    
