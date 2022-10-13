from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ExportSystemPackagesPathParams:
    inventory_id: str = field(default=None, metadata={'path_param': { 'field_name': 'inventory_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExportSystemPackagesQueryParams:
    filter_description_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[description]', 'style': 'form', 'explode': True }})
    filter_evra_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[evra]', 'style': 'form', 'explode': True }})
    filter_name_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[name]', 'style': 'form', 'explode': True }})
    filter_summary_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[summary]', 'style': 'form', 'explode': True }})
    filter_updatable_: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'filter[updatable]', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportSystemPackagesSecurity:
    rh_identity: shared.SchemeRhIdentity = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ExportSystemPackagesRequest:
    path_params: ExportSystemPackagesPathParams = field(default=None)
    query_params: ExportSystemPackagesQueryParams = field(default=None)
    security: ExportSystemPackagesSecurity = field(default=None)
    

@dataclass
class ExportSystemPackagesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    controllers_system_package_inlines: Optional[List[shared.ControllersSystemPackageInline]] = field(default=None)
    
