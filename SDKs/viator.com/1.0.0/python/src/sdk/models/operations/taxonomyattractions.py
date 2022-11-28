from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class TaxonomyAttractionsHeaders:
    accept_language: str = field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    
class TaxonomyAttractionsRequestBodySortOrderEnum(str, Enum):
    SEO_PUBLISHED_DATE_D = "SEO_PUBLISHED_DATE_D"
    SEO_PUBLISHED_DATE_A = "SEO_PUBLISHED_DATE_A"
    SEO_REVIEW_AVG_RATING_D = "SEO_REVIEW_AVG_RATING_D"
    SEO_REVIEW_AVG_RATING_A = "SEO_REVIEW_AVG_RATING_A"
    SEO_ALPHABETICAL = "SEO_ALPHABETICAL"


@dataclass_json
@dataclass
class TaxonomyAttractionsRequestBody:
    dest_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destId') }})
    sort_order: Optional[TaxonomyAttractionsRequestBodySortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    top_x: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topX') }})
    

@dataclass_json
@dataclass
class TaxonomyAttractions200ApplicationJSONData:
    attraction_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attractionCity') }})
    attraction_latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attractionLatitude') }})
    attraction_longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attractionLongitude') }})
    attraction_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attractionState') }})
    attraction_street_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attractionStreetAddress') }})
    destination_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationId') }})
    page_url_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageUrlName') }})
    photo_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photoCount') }})
    primary_destination_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryDestinationId') }})
    primary_destination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryDestinationName') }})
    primary_destination_url_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryDestinationUrlName') }})
    product_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCount') }})
    published_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishedDate') }})
    rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    seo_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seoId') }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    thumbnail_hi_res_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailHiResURL') }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailURL') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webURL') }})
    

@dataclass_json
@dataclass
class TaxonomyAttractions200ApplicationJSON:
    data: Optional[List[TaxonomyAttractions200ApplicationJSONData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
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
class TaxonomyAttractionsRequest:
    headers: TaxonomyAttractionsHeaders = field()
    request: Optional[TaxonomyAttractionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TaxonomyAttractionsResponse:
    content_type: str = field()
    status_code: int = field()
    taxonomy_attractions_200_application_json_object: Optional[TaxonomyAttractions200ApplicationJSON] = field(default=None)
    
