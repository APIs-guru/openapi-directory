from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetSearchVersionNumberStructuredGeocodeExtPathParams:
    ext: shared.ExtEnum = field(default=None, metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    version_number: int = field(default=None, metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSearchVersionNumberStructuredGeocodeExtQueryParams:
    country_code: str = field(default=None, metadata={'query_param': { 'field_name': 'countryCode', 'style': 'form', 'explode': True }})
    country_secondary_subdivision: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'countrySecondarySubdivision', 'style': 'form', 'explode': True }})
    country_subdivision: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'countrySubdivision', 'style': 'form', 'explode': True }})
    country_tertiary_subdivision: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'countryTertiarySubdivision', 'style': 'form', 'explode': True }})
    cross_street: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'crossStreet', 'style': 'form', 'explode': True }})
    extended_postal_codes_for: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'extendedPostalCodesFor', 'style': 'form', 'explode': True }})
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    municipality: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'municipality', 'style': 'form', 'explode': True }})
    municipality_subdivision: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'municipalitySubdivision', 'style': 'form', 'explode': True }})
    ofs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ofs', 'style': 'form', 'explode': True }})
    postal_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'postalCode', 'style': 'form', 'explode': True }})
    street_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'streetName', 'style': 'form', 'explode': True }})
    street_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'streetNumber', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchVersionNumberStructuredGeocodeExtRequest:
    path_params: GetSearchVersionNumberStructuredGeocodeExtPathParams = field(default=None)
    query_params: GetSearchVersionNumberStructuredGeocodeExtQueryParams = field(default=None)
    

@dataclass
class GetSearchVersionNumberStructuredGeocodeExtResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
