import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomersAccountAnnouncementsPathParams extends SpeakeasyBase {
    account: number;
}
export declare class GetCustomersAccountAnnouncements200ApplicationJson extends SpeakeasyBase {
    list?: shared.OneannouncementsPostResponses201ContentApplication1jsonSchema[];
}
export declare class GetCustomersAccountAnnouncementsRequest extends SpeakeasyBase {
    pathParams: GetCustomersAccountAnnouncementsPathParams;
}
export declare class GetCustomersAccountAnnouncementsResponse extends SpeakeasyBase {
    contentType: string;
    getCustomersAccountAnnouncements200ApplicationJsonObject?: GetCustomersAccountAnnouncements200ApplicationJson;
    statusCode: number;
    oneannouncementsPostResponses403ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses403ContentApplication1jsonSchema;
}
