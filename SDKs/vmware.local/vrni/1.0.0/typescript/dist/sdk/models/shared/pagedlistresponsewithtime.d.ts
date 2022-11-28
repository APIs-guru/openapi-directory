import { SpeakeasyBase } from "../../../internal/utils";
import { EntityIdWithTime } from "./entityidwithtime";
export declare class PagedListResponseWithTime extends SpeakeasyBase {
    cursor?: string;
    endTime?: number;
    results?: EntityIdWithTime[];
    startTime?: number;
    totalCount?: number;
}
