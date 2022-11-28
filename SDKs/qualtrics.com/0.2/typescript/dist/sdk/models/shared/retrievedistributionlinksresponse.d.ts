import { SpeakeasyBase } from "../../../internal/utils";
export declare class RetrieveDistributionLinksResponseMeta extends SpeakeasyBase {
    httpStatus?: string;
    requestId?: string;
}
export declare class RetrieveDistributionLinksResponseResultElements extends SpeakeasyBase {
    contactId: string;
    email: string;
    exceededContactFrequency: boolean;
    externalDataReference: any;
    firstName: string;
    lastName: string;
    link: string;
    linkExpiration: string;
    status: string;
    transactionId: any;
    unsubscribed: boolean;
}
export declare class RetrieveDistributionLinksResponseResult extends SpeakeasyBase {
    elements?: RetrieveDistributionLinksResponseResultElements[];
    nextPage?: any;
}
export declare class RetrieveDistributionLinksResponse extends SpeakeasyBase {
    meta?: RetrieveDistributionLinksResponseMeta;
    result?: RetrieveDistributionLinksResponseResult;
}
