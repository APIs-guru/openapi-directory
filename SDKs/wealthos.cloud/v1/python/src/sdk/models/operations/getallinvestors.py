from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared
from sdk.models import shared

class GetAllInvestorsSortEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class GetAllInvestorsQueryParams:
    page_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_number', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    sort: Optional[GetAllInvestorsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAllInvestorsHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllInvestorsSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclass
class GetAllInvestors200ApplicationJSON:
    r"""GetAllInvestors200ApplicationJSON
    Array of investors
    """
    
    investors: list[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('investors') }})
    next_page_available: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_available') }})
    

@dataclass
class GetAllInvestorsRequest:
    headers: GetAllInvestorsHeaders = field()
    query_params: GetAllInvestorsQueryParams = field()
    security: GetAllInvestorsSecurity = field()
    

@dataclass
class GetAllInvestorsResponse:
    content_type: str = field()
    status_code: int = field()
    get_all_investors_200_application_json_object: Optional[GetAllInvestors200ApplicationJSON] = field(default=None)
    get_all_investors_400_application_json_any: Optional[Any] = field(default=None)
    get_all_investors_401_application_json_any: Optional[Any] = field(default=None)
    get_all_investors_403_application_json_any: Optional[Any] = field(default=None)
    get_all_investors_429_application_json_any: Optional[Any] = field(default=None)
    get_all_investors_500_application_json_any: Optional[Any] = field(default=None)
    
