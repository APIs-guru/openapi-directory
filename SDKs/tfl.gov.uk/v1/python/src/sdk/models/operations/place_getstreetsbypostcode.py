from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PlaceGetStreetsByPostCodePathParams:
    postcode: str = field(default=None, metadata={'path_param': { 'field_name': 'Postcode', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlaceGetStreetsByPostCodeQueryParams:
    postcode: str = field(default=None, metadata={'query_param': { 'field_name': 'postcode', 'style': 'form', 'explode': True }})
    postcode_input_postcode: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'postcodeInput.postcode', 'style': 'form', 'explode': True }})
    

@dataclass
class PlaceGetStreetsByPostCodeRequest:
    path_params: PlaceGetStreetsByPostCodePathParams = field(default=None)
    query_params: PlaceGetStreetsByPostCodeQueryParams = field(default=None)
    

@dataclass
class PlaceGetStreetsByPostCodeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
