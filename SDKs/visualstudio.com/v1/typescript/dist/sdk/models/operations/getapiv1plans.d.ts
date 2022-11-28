import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1PlansResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    planResults?: shared.PlanResult[];
    problemDetails?: Map<string, any>;
    statusCode: number;
}
