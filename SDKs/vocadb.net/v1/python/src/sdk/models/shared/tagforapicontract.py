from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import tagbasecontract
from . import entrythumbforapicontract
from . import localizedstringwithidcontract
from . import tagbasecontract
from . import tagbasecontract
from . import englishtranslatedstringcontract
from . import weblinkforapicontract

class TagForAPIContractDefaultNameLanguageEnum(str, Enum):
    UNSPECIFIED = "Unspecified"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class TagForAPIContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclass
class TagForAPIContract:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalNames' }})
    aliased_to: Optional[tagbasecontract.TagBaseContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aliasedTo' }})
    category_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryName' }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_name_language: Optional[TagForAPIContractDefaultNameLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultNameLanguage' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    main_picture: Optional[entrythumbforapicontract.EntryThumbForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainPicture' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    names: Optional[List[localizedstringwithidcontract.LocalizedStringWithIDContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'names' }})
    parent: Optional[tagbasecontract.TagBaseContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    related_tags: Optional[List[tagbasecontract.TagBaseContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedTags' }})
    status: Optional[TagForAPIContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    targets: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    translated_description: Optional[englishtranslatedstringcontract.EnglishTranslatedStringContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translatedDescription' }})
    url_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlSlug' }})
    usage_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usageCount' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    web_links: Optional[List[weblinkforapicontract.WebLinkForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webLinks' }})
    
