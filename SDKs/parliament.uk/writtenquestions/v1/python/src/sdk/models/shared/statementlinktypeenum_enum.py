from dataclasses import dataclass, field
from typing import Enum

class StatementLinkTypeEnumEnum(str, Enum):
    CORRECTED_STATEMENT = "CorrectedStatement"
    CORRECTED_ANSWER = "CorrectedAnswer"
    JOINT_STATEMENT = "JointStatement"

