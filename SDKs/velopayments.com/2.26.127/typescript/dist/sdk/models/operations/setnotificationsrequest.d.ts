import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetNotificationsRequestPathParams extends SpeakeasyBase {
    sourceAccountId: string;
}
export declare class SetNotificationsRequestRequest extends SpeakeasyBase {
    pathParams: SetNotificationsRequestPathParams;
    request: shared.SetNotificationsRequest;
}
export declare class SetNotificationsRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
