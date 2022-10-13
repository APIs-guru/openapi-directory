from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PlaceGetByGeoQueryParams:
    active_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'activeOnly', 'style': 'form', 'explode': True }})
    categories: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'categories', 'style': 'form', 'explode': True }})
    include_children: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeChildren', 'style': 'form', 'explode': True }})
    number_of_places_to_return: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'numberOfPlacesToReturn', 'style': 'form', 'explode': True }})
    place_geo_lat: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'placeGeo.lat', 'style': 'form', 'explode': True }})
    place_geo_lon: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'placeGeo.lon', 'style': 'form', 'explode': True }})
    place_geo_ne_lat: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'placeGeo.neLat', 'style': 'form', 'explode': True }})
    place_geo_ne_lon: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'placeGeo.neLon', 'style': 'form', 'explode': True }})
    place_geo_sw_lat: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'placeGeo.swLat', 'style': 'form', 'explode': True }})
    place_geo_sw_lon: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'placeGeo.swLon', 'style': 'form', 'explode': True }})
    radius: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    type: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class PlaceGetByGeoRequest:
    query_params: PlaceGetByGeoQueryParams = field(default=None)
    

@dataclass
class PlaceGetByGeoResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_stop_points: Optional[List[shared.TflAPIPresentationEntitiesStopPoint]] = field(default=None)
    
