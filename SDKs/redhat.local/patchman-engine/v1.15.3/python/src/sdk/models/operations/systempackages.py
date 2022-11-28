from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SystemPackagesPathParams:
    inventory_id: str = field(metadata={'path_param': { 'field_name': 'inventory_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SystemPackagesQueryParams:
    filter_description_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[description]', 'style': 'form', 'explode': True }})
    filter_evra_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[evra]', 'style': 'form', 'explode': True }})
    filter_name_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[name]', 'style': 'form', 'explode': True }})
    filter_summary_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[summary]', 'style': 'form', 'explode': True }})
    filter_updatable_: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'filter[updatable]', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class SystemPackagesSecurity:
    rh_identity: shared.SchemeRhIdentity = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SystemPackagesRequest:
    path_params: SystemPackagesPathParams = field()
    query_params: SystemPackagesQueryParams = field()
    security: SystemPackagesSecurity = field()
    

@dataclass
class SystemPackagesResponse:
    content_type: str = field()
    status_code: int = field()
    controllers_system_package_response: Optional[shared.ControllersSystemPackageResponse] = field(default=None)
    
