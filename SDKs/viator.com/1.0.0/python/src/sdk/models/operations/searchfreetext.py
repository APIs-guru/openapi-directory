from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SearchFreetextHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    
class SearchFreetextRequestBodySearchTypesEnum(str, Enum):
    PRODUCT = "PRODUCT"
    DESTINATION = "DESTINATION"
    ATTRACTION = "ATTRACTION"
    RECOMMENDATION = "RECOMMENDATION"


@dataclass_json
@dataclass
class SearchFreetextRequestBody:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    dest_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destId' }})
    search_types: Optional[List[SearchFreetextRequestBodySearchTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchTypes' }})
    sort_order: Optional[shared.SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    top_x: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topX' }})
    

@dataclass
class SearchFreetextRequest:
    headers: SearchFreetextHeaders = field(default=None)
    request: Optional[SearchFreetextRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class SearchFreetext200ApplicationJSON:
    data: Optional[List[shared.SearchFreetextResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    date_stamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateStamp' }})
    error_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCodes' }})
    error_message: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    error_message_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessageText' }})
    error_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorName' }})
    error_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorReference' }})
    error_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorType' }})
    extra_info: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extraInfo' }})
    extra_object: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extraObject' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCount' }})
    vmid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmid' }})
    

@dataclass
class SearchFreetextResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    search_freetext_200_application_json_object: Optional[SearchFreetext200ApplicationJSON] = field(default=None)
    
