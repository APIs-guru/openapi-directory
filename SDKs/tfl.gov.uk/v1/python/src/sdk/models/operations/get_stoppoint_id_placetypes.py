from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetStopPointIDPlaceTypesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStopPointIDPlaceTypesQueryParams:
    place_types: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'placeTypes', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStopPointIDPlaceTypesRequest:
    path_params: GetStopPointIDPlaceTypesPathParams = field(default=None)
    query_params: GetStopPointIDPlaceTypesQueryParams = field(default=None)
    

@dataclass
class GetStopPointIDPlaceTypesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_places: Optional[List[shared.TflAPIPresentationEntitiesPlace]] = field(default=None)
    
