import { SpeakeasyBase } from "../../../internal/utils";
import { EntityId } from "./entityid";
export declare class PagedListResponse extends SpeakeasyBase {
    cursor?: string;
    endTime?: number;
    results?: EntityId[];
    startTime?: number;
    totalCount?: number;
}
