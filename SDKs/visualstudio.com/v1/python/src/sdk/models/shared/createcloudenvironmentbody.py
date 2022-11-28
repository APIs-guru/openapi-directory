from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateCloudEnvironmentBody:
    friendly_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendlyName') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    auto_shutdown_delay_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoShutdownDelayMinutes') }})
    connection: Optional[ConnectionInfoBody] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection') }})
    container_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerImage') }})
    create_as_prebuild: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createAsPrebuild') }})
    dev_container_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devContainerJson') }})
    experimental_features: Optional[ExperimentalFeaturesBody] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('experimentalFeatures') }})
    features: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    github_environment_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('githubEnvironmentEndpoint') }})
    has_devcontainer_json: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasDevcontainerJson') }})
    identity: Optional[IdentityBody] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identity') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    personalization: Optional[PersonalizationInfoBody] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalization') }})
    plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('planId') }})
    platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    secrets: Optional[List[SecretDataBody]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secrets') }})
    seed: Optional[SeedInfoBody] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seed') }})
    sku_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skuName') }})
    
