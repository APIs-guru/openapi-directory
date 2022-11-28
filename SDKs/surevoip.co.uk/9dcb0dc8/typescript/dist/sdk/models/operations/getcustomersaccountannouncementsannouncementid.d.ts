import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomersAccountAnnouncementsAnnouncementIdPathParams extends SpeakeasyBase {
    account: number;
    announcementId: string;
}
export declare class GetCustomersAccountAnnouncementsAnnouncementId404ApplicationJson extends SpeakeasyBase {
    error?: string;
}
export declare class GetCustomersAccountAnnouncementsAnnouncementIdRequest extends SpeakeasyBase {
    pathParams: GetCustomersAccountAnnouncementsAnnouncementIdPathParams;
}
export declare class GetCustomersAccountAnnouncementsAnnouncementIdResponse extends SpeakeasyBase {
    contentType: string;
    getCustomersAccountAnnouncementsAnnouncementId404ApplicationJsonObject?: GetCustomersAccountAnnouncementsAnnouncementId404ApplicationJson;
    statusCode: number;
    oneannouncementsPostResponses201ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses201ContentApplication1jsonSchema;
}
