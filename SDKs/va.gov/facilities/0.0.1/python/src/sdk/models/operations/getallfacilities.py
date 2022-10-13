from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetAllFacilitiesAcceptEnum(str, Enum):
    APPLICATION_GEO_PLUS_JSON = "application/geo+json"
    APPLICATION_VND_GEO_PLUS_JSON = "application/vnd.geo+json"
    TEXT_CSV = "text/csv"


@dataclass
class GetAllFacilitiesHeaders:
    accept: GetAllFacilitiesAcceptEnum = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    

@dataclass
class GetAllFacilitiesSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAllFacilitiesRequest:
    headers: GetAllFacilitiesHeaders = field(default=None)
    security: GetAllFacilitiesSecurity = field(default=None)
    

@dataclass
class GetAllFacilitiesResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    generic_error: Optional[shared.GenericError] = field(default=None)
    geo_facilities_response: Optional[shared.GeoFacilitiesResponse] = field(default=None)
    status_code: int = field(default=None)
    
