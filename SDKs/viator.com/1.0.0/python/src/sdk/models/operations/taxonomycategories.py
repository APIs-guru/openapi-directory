from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class TaxonomyCategoriesQueryParams:
    dest_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'destId', 'style': 'form', 'explode': True }})
    

@dataclass
class TaxonomyCategoriesHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass
class TaxonomyCategoriesRequest:
    query_params: TaxonomyCategoriesQueryParams = field(default=None)
    headers: TaxonomyCategoriesHeaders = field(default=None)
    

@dataclass_json
@dataclass
class TaxonomyCategories200ApplicationJSONDataSubcategories:
    category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryId' }})
    sortorder: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortorder' }})
    sub_category_url_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subCategoryUrlName' }})
    subcategory_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subcategoryId' }})
    subcategory_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subcategoryName' }})
    

@dataclass_json
@dataclass
class TaxonomyCategories200ApplicationJSONData:
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupName' }})
    group_url_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupUrlName' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    product_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCount' }})
    subcategories: Optional[List[TaxonomyCategories200ApplicationJSONDataSubcategories]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subcategories' }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailURL' }})
    

@dataclass_json
@dataclass
class TaxonomyCategories200ApplicationJSON:
    data: Optional[List[TaxonomyCategories200ApplicationJSONData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
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
class TaxonomyCategoriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    taxonomy_categories_200_application_json_object: Optional[TaxonomyCategories200ApplicationJSON] = field(default=None)
    
