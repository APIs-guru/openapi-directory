from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PackageSystemsPathParams:
    package_name: str = field(default=None, metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackageSystemsQueryParams:
    filter_system_profile_sap_sids_in_: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_sids][in]', 'style': 'form', 'explode': True }})
    filter_system_profile_sap_system_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_system]', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    tags: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclass
class PackageSystemsSecurity:
    rh_identity: shared.SchemeRhIdentity = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PackageSystemsRequest:
    path_params: PackageSystemsPathParams = field(default=None)
    query_params: PackageSystemsQueryParams = field(default=None)
    security: PackageSystemsSecurity = field(default=None)
    

@dataclass
class PackageSystemsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    controllers_package_systems_response: Optional[shared.ControllersPackageSystemsResponse] = field(default=None)
    
