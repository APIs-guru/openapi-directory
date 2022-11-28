from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetAllFacilitiesAcceptEnum(str, Enum):
    APPLICATION_GEO_PLUS_JSON = "application/geo+json"
    APPLICATION_VND_GEO_PLUS_JSON = "application/vnd.geo+json"
    TEXT_CSV = "text/csv"


@dataclass
class GetAllFacilitiesHeaders:
    accept: GetAllFacilitiesAcceptEnum = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllFacilitiesSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAllFacilitiesRequest:
    headers: GetAllFacilitiesHeaders = field()
    security: GetAllFacilitiesSecurity = field()
    

@dataclass
class GetAllFacilitiesResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    generic_error: Optional[shared.GenericError] = field(default=None)
    geo_facilities_response: Optional[shared.GeoFacilitiesResponse] = field(default=None)
    get_all_facilities_200_text_csv_string: Optional[str] = field(default=None)
    
