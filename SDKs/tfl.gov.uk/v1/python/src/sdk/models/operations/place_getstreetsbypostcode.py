from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PlaceGetStreetsByPostCodePathParams:
    postcode: str = field(metadata={'path_param': { 'field_name': 'Postcode', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlaceGetStreetsByPostCodeQueryParams:
    postcode: str = field(metadata={'query_param': { 'field_name': 'postcode', 'style': 'form', 'explode': True }})
    postcode_input_postcode: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'postcodeInput.postcode', 'style': 'form', 'explode': True }})
    

@dataclass
class PlaceGetStreetsByPostCodeRequest:
    path_params: PlaceGetStreetsByPostCodePathParams = field()
    query_params: PlaceGetStreetsByPostCodeQueryParams = field()
    

@dataclass
class PlaceGetStreetsByPostCodeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
