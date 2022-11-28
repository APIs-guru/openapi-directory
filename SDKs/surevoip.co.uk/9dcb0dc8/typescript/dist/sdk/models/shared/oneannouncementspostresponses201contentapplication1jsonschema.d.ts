import { SpeakeasyBase } from "../../../internal/utils";
export declare class OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementUrl extends SpeakeasyBase {
    download?: string;
    href?: string;
    title?: string;
}
export declare class OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement extends SpeakeasyBase {
    creationDate?: string;
    description?: string;
    fileInternal?: string;
    filename?: string;
    id?: string;
    size?: number;
    srcIpAddress?: string;
    url?: OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementUrl;
}
export declare class OneannouncementsPostResponses201ContentApplication1jsonSchema extends SpeakeasyBase {
    announcement?: OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement;
}
