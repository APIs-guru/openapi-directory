from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetStopPointIDPlaceTypesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStopPointIDPlaceTypesQueryParams:
    place_types: List[str] = field(metadata={'query_param': { 'field_name': 'placeTypes', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStopPointIDPlaceTypesRequest:
    path_params: GetStopPointIDPlaceTypesPathParams = field()
    query_params: GetStopPointIDPlaceTypesQueryParams = field()
    

@dataclass
class GetStopPointIDPlaceTypesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_places: Optional[List[shared.TflAPIPresentationEntitiesPlace]] = field(default=None)
    
