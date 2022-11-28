from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostAPIV1GenevaActionsConfigurationTargetPathParams:
    target: str = field(metadata={'path_param': { 'field_name': 'target', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAPIV1GenevaActionsConfigurationTargetRequests:
    update_system_configuration_body: Optional[shared.UpdateSystemConfigurationBody] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_system_configuration_body1: Optional[shared.UpdateSystemConfigurationBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_configuration_body2: Optional[shared.UpdateSystemConfigurationBody] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    update_system_configuration_body3: Optional[shared.UpdateSystemConfigurationBody] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAPIV1GenevaActionsConfigurationTargetRequest:
    path_params: PostAPIV1GenevaActionsConfigurationTargetPathParams = field()
    request: PostAPIV1GenevaActionsConfigurationTargetRequests = field()
    

@dataclass
class PostAPIV1GenevaActionsConfigurationTargetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    system_configuration_response: Optional[shared.SystemConfigurationResponse] = field(default=None)
    
