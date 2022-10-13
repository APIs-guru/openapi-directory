from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TaxonomyDestinationsHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass
class TaxonomyDestinationsRequest:
    headers: TaxonomyDestinationsHeaders = field(default=None)
    

@dataclass_json
@dataclass
class TaxonomyDestinations200ApplicationJSONData:
    default_currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultCurrencyCode' }})
    destination_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationId' }})
    destination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationName' }})
    destination_type: Optional[shared.DestinationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationType' }})
    destination_url_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationUrlName' }})
    iata_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iataCode' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    lookup_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lookupId' }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentId' }})
    selectable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectable' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    

@dataclass_json
@dataclass
class TaxonomyDestinations200ApplicationJSON:
    data: Optional[List[TaxonomyDestinations200ApplicationJSONData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
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
class TaxonomyDestinationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    taxonomy_destinations_200_application_json_object: Optional[TaxonomyDestinations200ApplicationJSON] = field(default=None)
    
