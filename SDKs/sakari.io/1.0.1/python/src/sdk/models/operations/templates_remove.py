from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class TemplatesRemovePathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    template_id: str = field(default=None, metadata={'path_param': { 'field_name': 'templateId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TemplatesRemoveSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TemplatesRemoveRequest:
    path_params: TemplatesRemovePathParams = field(default=None)
    security: TemplatesRemoveSecurity = field(default=None)
    

@dataclass_json
@dataclass
class TemplatesRemove200ApplicationJSON:
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    

@dataclass
class TemplatesRemoveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    templates_remove_200_application_json_object: Optional[TemplatesRemove200ApplicationJSON] = field(default=None)
    
