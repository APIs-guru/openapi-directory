import { SpeakeasyBase } from "../../../internal/utils";
export declare class DistributionsResponseMeta extends SpeakeasyBase {
    httpStatus?: string;
    requestId?: string;
}
export declare class DistributionsResponseResultElementsHeaders extends SpeakeasyBase {
    fromEmail?: any;
    fromName?: any;
    replyToEmail?: any;
}
export declare class DistributionsResponseResultElementsMessage extends SpeakeasyBase {
    libraryId?: any;
    messageId?: any;
    messageText?: any;
}
export declare class DistributionsResponseResultElementsRecipients extends SpeakeasyBase {
    contactId?: any;
    libraryId?: string;
    mailingListId?: string;
    sampleId?: any;
}
export declare class DistributionsResponseResultElementsStats extends SpeakeasyBase {
    blocked?: number;
    bounced?: number;
    complaints?: number;
    failed?: number;
    finished?: number;
    opened?: number;
    sent?: number;
    skipped?: number;
    started?: number;
}
export declare class DistributionsResponseResultElementsSurveyLink extends SpeakeasyBase {
    expirationDate?: string;
    linkType?: string;
    surveyId?: string;
}
export declare class DistributionsResponseResultElements extends SpeakeasyBase {
    createdDate: string;
    customHeaders: Map<string, any>;
    embeddedData: any;
    headers: DistributionsResponseResultElementsHeaders;
    id: string;
    message: DistributionsResponseResultElementsMessage;
    modifiedDate: string;
    organizationId: string;
    ownerId: string;
    parentDistributionId: any;
    recipients: DistributionsResponseResultElementsRecipients;
    requestStatus: string;
    requestType: string;
    sendDate: string;
    stats: DistributionsResponseResultElementsStats;
    surveyLink: DistributionsResponseResultElementsSurveyLink;
}
export declare class DistributionsResponseResult extends SpeakeasyBase {
    elements?: DistributionsResponseResultElements[];
    nextPage?: any;
}
export declare class DistributionsResponse extends SpeakeasyBase {
    meta?: DistributionsResponseMeta;
    result?: DistributionsResponseResult;
}
