from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtPathParams:
    ext: shared.ExtEnum = field(metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    heading: float = field(metadata={'path_param': { 'field_name': 'heading', 'style': 'simple', 'explode': False }})
    position: str = field(metadata={'path_param': { 'field_name': 'position', 'style': 'simple', 'explode': False }})
    query: str = field(metadata={'path_param': { 'field_name': 'query', 'style': 'simple', 'explode': False }})
    version_number: int = field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryParams:
    extended_postal_codes_for: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'extendedPostalCodesFor', 'style': 'form', 'explode': True }})
    idx_set: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'idxSet', 'style': 'form', 'explode': True }})
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    multiplier: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'multiplier', 'style': 'form', 'explode': True }})
    routing_timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'routingTimeout', 'style': 'form', 'explode': True }})
    typeahead: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'typeahead', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest:
    path_params: GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtPathParams = field()
    query_params: GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryParams = field()
    

@dataclass
class GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse:
    content_type: str = field()
    status_code: int = field()
    
