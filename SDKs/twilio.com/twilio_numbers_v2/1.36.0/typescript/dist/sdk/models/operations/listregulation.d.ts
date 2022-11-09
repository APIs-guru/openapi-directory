import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTREGULATION_SERVERS: string[];
export declare class ListRegulationQueryParams extends SpeakeasyBase {
    endUserType?: shared.RegulationEnumEndUserTypeEnum;
    isoCountry?: string;
    numberType?: string;
    pageSize?: number;
}
export declare class ListRegulationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListRegulationRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListRegulationQueryParams;
    security: ListRegulationSecurity;
}
export declare class ListRegulationListRegulationResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListRegulationListRegulationResponse extends SpeakeasyBase {
    meta?: ListRegulationListRegulationResponseMeta;
    results?: shared.NumbersV2RegulatoryComplianceRegulation[];
}
export declare class ListRegulationResponse extends SpeakeasyBase {
    contentType: string;
    listRegulationResponse?: ListRegulationListRegulationResponse;
    statusCode: number;
}
