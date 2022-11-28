import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommandsSendQueryParams extends SpeakeasyBase {
    deviceId?: number;
}
export declare class GetCommandsSendRequest extends SpeakeasyBase {
    queryParams: GetCommandsSendQueryParams;
}
export declare class GetCommandsSendResponse extends SpeakeasyBase {
    commands?: shared.Command[];
    contentType: string;
    statusCode: number;
}
