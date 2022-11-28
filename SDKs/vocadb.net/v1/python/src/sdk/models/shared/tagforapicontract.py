from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    aliased_to: Optional[TagBaseContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aliasedTo') }})
    category_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryName') }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_name_language: Optional[TagForAPIContractDefaultNameLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultNameLanguage') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    main_picture: Optional[EntryThumbForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainPicture') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    names: Optional[List[LocalizedStringWithIDContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    parent: Optional[TagBaseContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    related_tags: Optional[List[TagBaseContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedTags') }})
    status: Optional[TagForAPIContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    targets: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    translated_description: Optional[EnglishTranslatedStringContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translatedDescription') }})
    url_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlSlug') }})
    usage_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageCount') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    web_links: Optional[List[WebLinkForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webLinks') }})
    
