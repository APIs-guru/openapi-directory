import { SpeakeasyBase } from "../../../internal/utils";
import { CollectedData } from "./collecteddata";
export declare class HeartBeatBody extends SpeakeasyBase {
    agentVersion?: string;
    collectedDataList?: CollectedData[];
    environmentId?: string;
    resourceId?: string;
    timeStamp?: Date;
}
