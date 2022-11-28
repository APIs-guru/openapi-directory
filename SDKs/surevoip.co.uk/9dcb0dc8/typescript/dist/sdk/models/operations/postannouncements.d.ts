import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAnnouncementsRequestBody extends SpeakeasyBase {
    description?: string;
    file?: string;
}
export declare class PostAnnouncements201ApplicationJsonAnnouncementUrl extends SpeakeasyBase {
    download?: string;
    href?: string;
    title?: string;
}
export declare class PostAnnouncements201ApplicationJsonAnnouncement extends SpeakeasyBase {
    creationDate?: string;
    description?: string;
    fileInternal?: string;
    filename?: string;
    id?: string;
    size?: number;
    srcIpAddress?: string;
    url?: PostAnnouncements201ApplicationJsonAnnouncementUrl;
}
export declare class PostAnnouncements201ApplicationJson extends SpeakeasyBase {
    announcement?: PostAnnouncements201ApplicationJsonAnnouncement;
}
export declare class PostAnnouncements400ApplicationJsonErrors extends SpeakeasyBase {
    field: string;
    message: string[];
}
export declare class PostAnnouncements400ApplicationJson extends SpeakeasyBase {
    errors: PostAnnouncements400ApplicationJsonErrors[];
}
export declare class PostAnnouncements403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostAnnouncementsRequest extends SpeakeasyBase {
    request: PostAnnouncementsRequestBody;
}
export declare class PostAnnouncementsResponse extends SpeakeasyBase {
    contentType: string;
    postAnnouncements201ApplicationJsonObject?: PostAnnouncements201ApplicationJson;
    postAnnouncements400ApplicationJsonObject?: PostAnnouncements400ApplicationJson;
    postAnnouncements403ApplicationJsonObject?: PostAnnouncements403ApplicationJson;
    statusCode: number;
    oneannouncementsPostResponses403ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses403ContentApplication1jsonSchema;
}
