from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class ListPackagesSortEnum(str, Enum):
    ID = "id"
    NAME = "name"
    SYSTEMS_INSTALLED = "systems_installed"
    SYSTEMS_UPDATABLE = "systems_updatable"


@dataclass
class ListPackagesQueryParams:
    filter_name_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[name]', 'style': 'form', 'explode': True }})
    filter_summary_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[summary]', 'style': 'form', 'explode': True }})
    filter_system_profile_sap_sids_in_: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_sids][in]', 'style': 'form', 'explode': True }})
    filter_system_profile_sap_system_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_system]', 'style': 'form', 'explode': True }})
    filter_systems_installed_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[systems_installed]', 'style': 'form', 'explode': True }})
    filter_systems_updatable_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[systems_updatable]', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    sort: Optional[ListPackagesSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    tags: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclass
class ListPackagesSecurity:
    rh_identity: shared.SchemeRhIdentity = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListPackagesRequest:
    query_params: ListPackagesQueryParams = field()
    security: ListPackagesSecurity = field()
    

@dataclass
class ListPackagesResponse:
    content_type: str = field()
    status_code: int = field()
    controllers_packages_response: Optional[shared.ControllersPackagesResponse] = field(default=None)
    
