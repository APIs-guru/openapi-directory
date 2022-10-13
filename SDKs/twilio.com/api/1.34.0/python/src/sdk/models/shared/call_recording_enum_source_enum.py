from dataclasses import dataclass, field
from typing import Enum

class CallRecordingEnumSourceEnum(str, Enum):
    DIAL_VERB = "DialVerb"
    CONFERENCE = "Conference"
    OUTBOUND_API = "OutboundAPI"
    TRUNKING = "Trunking"
    RECORD_VERB = "RecordVerb"
    START_CALL_RECORDING_API = "StartCallRecordingAPI"
    START_CONFERENCE_RECORDING_API = "StartConferenceRecordingAPI"

