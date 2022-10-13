from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class FlexV1Configuration:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    attributes: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    call_recording_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_recording_enabled' }})
    call_recording_webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_recording_webhook_url' }})
    channel_configs: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel_configs' }})
    chat_service_instance_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chat_service_instance_sid' }})
    crm_attributes: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crm_attributes' }})
    crm_callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crm_callback_url' }})
    crm_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crm_enabled' }})
    crm_fallback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crm_fallback_url' }})
    crm_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crm_type' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    flex_insights_drilldown: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flex_insights_drilldown' }})
    flex_insights_hr: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flex_insights_hr' }})
    flex_service_instance_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flex_service_instance_sid' }})
    flex_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flex_url' }})
    integrations: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrations' }})
    markdown: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'markdown' }})
    messaging_service_instance_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messaging_service_instance_sid' }})
    notifications: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifications' }})
    outbound_call_flows: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outbound_call_flows' }})
    plugin_service_attributes: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plugin_service_attributes' }})
    plugin_service_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plugin_service_enabled' }})
    public_attributes: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_attributes' }})
    queue_stats_configuration: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queue_stats_configuration' }})
    runtime_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtime_domain' }})
    serverless_service_sids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverless_service_sids' }})
    service_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_version' }})
    status: Optional[shared.ConfigurationEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    taskrouter_offline_activity_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskrouter_offline_activity_sid' }})
    taskrouter_skills: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskrouter_skills' }})
    taskrouter_target_taskqueue_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskrouter_target_taskqueue_sid' }})
    taskrouter_target_workflow_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskrouter_target_workflow_sid' }})
    taskrouter_taskqueues: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskrouter_taskqueues' }})
    taskrouter_worker_attributes: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskrouter_worker_attributes' }})
    taskrouter_worker_channels: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskrouter_worker_channels' }})
    taskrouter_workspace_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskrouter_workspace_sid' }})
    ui_attributes: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ui_attributes' }})
    ui_dependencies: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ui_dependencies' }})
    ui_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ui_language' }})
    ui_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ui_version' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
