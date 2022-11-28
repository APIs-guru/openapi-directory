import { SpeakeasyBase } from "../../../internal/utils";
import { DurationFieldType } from "./durationfieldtype";
export declare class DurationField extends SpeakeasyBase {
    name?: string;
    precise?: boolean;
    supported?: boolean;
    type?: DurationFieldType;
    unitMillis?: number;
}
