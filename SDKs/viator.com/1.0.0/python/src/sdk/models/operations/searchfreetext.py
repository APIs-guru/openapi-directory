from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SearchFreetextHeaders:
    accept_language: str = field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    
class SearchFreetextRequestBodySearchTypesEnum(str, Enum):
    PRODUCT = "PRODUCT"
    DESTINATION = "DESTINATION"
    ATTRACTION = "ATTRACTION"
    RECOMMENDATION = "RECOMMENDATION"


@dataclass_json
@dataclass
class SearchFreetextRequestBody:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    dest_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destId') }})
    search_types: Optional[List[SearchFreetextRequestBodySearchTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchTypes') }})
    sort_order: Optional[shared.SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    top_x: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topX') }})
    

@dataclass_json
@dataclass
class SearchFreetext200ApplicationJSON:
    data: Optional[List[shared.SearchFreetextResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    date_stamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateStamp') }})
    error_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCodes') }})
    error_message: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    error_message_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessageText') }})
    error_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorName') }})
    error_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorReference') }})
    error_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorType') }})
    extra_info: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extraInfo') }})
    extra_object: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extraObject') }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    vmid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmid') }})
    

@dataclass
class SearchFreetextRequest:
    headers: SearchFreetextHeaders = field()
    request: Optional[SearchFreetextRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SearchFreetextResponse:
    content_type: str = field()
    status_code: int = field()
    search_freetext_200_application_json_object: Optional[SearchFreetext200ApplicationJSON] = field(default=None)
    
