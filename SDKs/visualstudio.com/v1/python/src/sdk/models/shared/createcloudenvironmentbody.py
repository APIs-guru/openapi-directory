from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import connectioninfobody
from . import experimentalfeaturesbody
from . import identitybody
from . import personalizationinfobody
from . import secretdatabody
from . import seedinfobody


@dataclass_json
@dataclass
class CreateCloudEnvironmentBody:
    auto_shutdown_delay_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoShutdownDelayMinutes' }})
    connection: Optional[connectioninfobody.ConnectionInfoBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection' }})
    container_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerImage' }})
    create_as_prebuild: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createAsPrebuild' }})
    dev_container_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devContainerJson' }})
    experimental_features: Optional[experimentalfeaturesbody.ExperimentalFeaturesBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'experimentalFeatures' }})
    features: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    friendly_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendlyName' }})
    github_environment_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'githubEnvironmentEndpoint' }})
    has_devcontainer_json: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasDevcontainerJson' }})
    identity: Optional[identitybody.IdentityBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identity' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    personalization: Optional[personalizationinfobody.PersonalizationInfoBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalization' }})
    plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planId' }})
    platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    secrets: Optional[List[secretdatabody.SecretDataBody]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secrets' }})
    seed: Optional[seedinfobody.SeedInfoBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seed' }})
    sku_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skuName' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
