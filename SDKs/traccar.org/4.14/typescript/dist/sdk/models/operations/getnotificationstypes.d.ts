import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNotificationsTypesResponse extends SpeakeasyBase {
    contentType: string;
    notificationTypes?: shared.NotificationType[];
    statusCode: number;
}
