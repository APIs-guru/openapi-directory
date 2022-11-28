import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutNotificationsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutNotificationsIdRequest extends SpeakeasyBase {
    pathParams: PutNotificationsIdPathParams;
    request: shared.Notification;
}
export declare class PutNotificationsIdResponse extends SpeakeasyBase {
    contentType: string;
    notification?: shared.Notification;
    statusCode: number;
}
