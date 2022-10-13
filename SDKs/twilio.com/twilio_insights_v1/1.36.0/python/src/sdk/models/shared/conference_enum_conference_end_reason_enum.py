from dataclasses import dataclass, field
from typing import Enum

class ConferenceEnumConferenceEndReasonEnum(str, Enum):
    LAST_PARTICIPANT_LEFT = "last_participant_left"
    CONFERENCE_ENDED_VIA_API = "conference_ended_via_api"
    PARTICIPANT_WITH_END_CONFERENCE_ON_EXIT_LEFT = "participant_with_end_conference_on_exit_left"
    LAST_PARTICIPANT_KICKED = "last_participant_kicked"
    PARTICIPANT_WITH_END_CONFERENCE_ON_EXIT_KICKED = "participant_with_end_conference_on_exit_kicked"

