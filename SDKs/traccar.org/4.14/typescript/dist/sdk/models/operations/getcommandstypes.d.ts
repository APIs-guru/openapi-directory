import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommandsTypesQueryParams extends SpeakeasyBase {
    deviceId?: number;
    protocol?: string;
    textChannel?: boolean;
}
export declare class GetCommandsTypesRequest extends SpeakeasyBase {
    queryParams: GetCommandsTypesQueryParams;
}
export declare class GetCommandsTypesResponse extends SpeakeasyBase {
    commandTypes?: shared.CommandType[];
    contentType: string;
    statusCode: number;
}
