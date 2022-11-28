import { SpeakeasyBase } from "../../../internal/utils";
import { StatusCount } from "./statuscount";
export declare class PagingInfo extends SpeakeasyBase {
    skip?: number;
    statusCounts?: StatusCount[];
    take?: number;
    total?: number;
}
