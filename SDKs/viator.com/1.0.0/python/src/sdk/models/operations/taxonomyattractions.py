from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class TaxonomyAttractionsHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    
class TaxonomyAttractionsRequestBodySortOrderEnum(str, Enum):
    SEO_PUBLISHED_DATE_D = "SEO_PUBLISHED_DATE_D"
    SEO_PUBLISHED_DATE_A = "SEO_PUBLISHED_DATE_A"
    SEO_REVIEW_AVG_RATING_D = "SEO_REVIEW_AVG_RATING_D"
    SEO_REVIEW_AVG_RATING_A = "SEO_REVIEW_AVG_RATING_A"
    SEO_ALPHABETICAL = "SEO_ALPHABETICAL"


@dataclass_json
@dataclass
class TaxonomyAttractionsRequestBody:
    dest_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destId' }})
    sort_order: Optional[TaxonomyAttractionsRequestBodySortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    top_x: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topX' }})
    

@dataclass
class TaxonomyAttractionsRequest:
    headers: TaxonomyAttractionsHeaders = field(default=None)
    request: Optional[TaxonomyAttractionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class TaxonomyAttractions200ApplicationJSONData:
    attraction_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attractionCity' }})
    attraction_latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attractionLatitude' }})
    attraction_longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attractionLongitude' }})
    attraction_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attractionState' }})
    attraction_street_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attractionStreetAddress' }})
    destination_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationId' }})
    page_url_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageUrlName' }})
    photo_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photoCount' }})
    primary_destination_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryDestinationId' }})
    primary_destination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryDestinationName' }})
    primary_destination_url_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryDestinationUrlName' }})
    product_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCount' }})
    published_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishedDate' }})
    rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    seo_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seoId' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    thumbnail_hi_res_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailHiResURL' }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailURL' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webURL' }})
    

@dataclass_json
@dataclass
class TaxonomyAttractions200ApplicationJSON:
    data: Optional[List[TaxonomyAttractions200ApplicationJSONData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
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
class TaxonomyAttractionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    taxonomy_attractions_200_application_json_object: Optional[TaxonomyAttractions200ApplicationJSON] = field(default=None)
    
