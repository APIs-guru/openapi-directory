from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class TaxonomyCategoriesQueryParams:
    dest_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'destId', 'style': 'form', 'explode': True }})
    

@dataclass
class TaxonomyCategoriesHeaders:
    accept_language: str = field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TaxonomyCategories200ApplicationJSONDataSubcategories:
    category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryId') }})
    sortorder: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortorder') }})
    sub_category_url_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subCategoryUrlName') }})
    subcategory_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subcategoryId') }})
    subcategory_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subcategoryName') }})
    

@dataclass_json
@dataclass
class TaxonomyCategories200ApplicationJSONData:
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupName') }})
    group_url_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupUrlName') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    product_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCount') }})
    subcategories: Optional[List[TaxonomyCategories200ApplicationJSONDataSubcategories]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subcategories') }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailURL') }})
    

@dataclass_json
@dataclass
class TaxonomyCategories200ApplicationJSON:
    data: Optional[List[TaxonomyCategories200ApplicationJSONData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
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
class TaxonomyCategoriesRequest:
    headers: TaxonomyCategoriesHeaders = field()
    query_params: TaxonomyCategoriesQueryParams = field()
    

@dataclass
class TaxonomyCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    taxonomy_categories_200_application_json_object: Optional[TaxonomyCategories200ApplicationJSON] = field(default=None)
    
