import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScriptsInstancesQueryParams extends SpeakeasyBase {
    teamId?: string;
}
export declare class GetScriptsInstancesRequest extends SpeakeasyBase {
    queryParams: GetScriptsInstancesQueryParams;
}
export declare class GetScriptsInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    scriptInstanceDetails?: shared.ScriptInstanceDetails[];
    statusCode: number;
}
