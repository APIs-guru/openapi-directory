from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostAdminMappingsRemoveByMetadataRequestBodyStringEquals:
    equal_to: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('equalTo') }})
    case_insensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseInsensitive') }})
    

@dataclass_json
@dataclass
class PostAdminMappingsRemoveByMetadataRequestBodyStringContains:
    contains: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contains') }})
    

@dataclass_json
@dataclass
class PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch:
    matches: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('matches') }})
    

@dataclass_json
@dataclass
class PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch:
    does_not_match: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('doesNotMatch') }})
    

@dataclass_json
@dataclass
class PostAdminMappingsRemoveByMetadataRequestBodyJSONEquals:
    equal_to_json: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('equalToJson') }})
    

@dataclass_json
@dataclass
class PostAdminMappingsRemoveByMetadataRequestBodyJSONPathMatch:
    matches_json_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchesJsonPath') }})
    ignore_array_order: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreArrayOrder') }})
    ignore_extra_elements: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreExtraElements') }})
    

@dataclass_json
@dataclass
class PostAdminMappingsRemoveByMetadataRequestBodyXMLEquality:
    equal_to_xml: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('equalToXml') }})
    

@dataclass_json
@dataclass
class PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch:
    matches_xpath: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchesXpath') }})
    namespaces: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaces') }})
    value_pattern: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valuePattern') }})
    

@dataclass
class PostAdminMappingsRemoveByMetadataRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAdminMappingsRemoveByMetadataResponse:
    content_type: str = field()
    status_code: int = field()
    
