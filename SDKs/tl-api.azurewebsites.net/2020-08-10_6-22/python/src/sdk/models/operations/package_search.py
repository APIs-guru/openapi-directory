from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PackageSearchQueryParams:
    active_status: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'activeStatus', 'style': 'form', 'explode': True }})
    category_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'categoryId', 'style': 'form', 'explode': True }})
    end_price: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'endPrice', 'style': 'form', 'explode': True }})
    gym_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'gymId', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    request_source: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'requestSource', 'style': 'form', 'explode': True }})
    search_text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchText', 'style': 'form', 'explode': True }})
    startp_price: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'startpPrice', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class PackageSearchRequest:
    query_params: PackageSearchQueryParams = field(default=None)
    

@dataclass
class PackageSearchResponse:
    api_exception: Optional[shared.APIException] = field(default=None)
    content_type: str = field(default=None)
    default_response_dto_of_list_of_package_search_dto: Optional[shared.DefaultResponseDtoOfListOfPackageSearchDto] = field(default=None)
    default_response_dto_of_package_search_dtos: Optional[List[shared.DefaultResponseDtoOfPackageSearchDto]] = field(default=None)
    status_code: int = field(default=None)
    
