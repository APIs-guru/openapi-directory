import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommandsQueryParams extends SpeakeasyBase {
    all?: boolean;
    deviceId?: number;
    groupId?: number;
    refresh?: boolean;
    userId?: number;
}
export declare class GetCommandsRequest extends SpeakeasyBase {
    queryParams: GetCommandsQueryParams;
}
export declare class GetCommandsResponse extends SpeakeasyBase {
    commands?: shared.Command[];
    contentType: string;
    statusCode: number;
}
