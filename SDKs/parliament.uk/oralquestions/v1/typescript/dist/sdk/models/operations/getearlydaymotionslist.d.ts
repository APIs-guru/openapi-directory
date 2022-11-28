import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetEarlyDayMotionsListParametersOrderByEnum {
    DateTabledAsc = "DateTabledAsc",
    DateTabledDesc = "DateTabledDesc",
    TitleAsc = "TitleAsc",
    TitleDesc = "TitleDesc",
    SignatureCountAsc = "SignatureCountAsc",
    SignatureCountDesc = "SignatureCountDesc"
}
export declare enum GetEarlyDayMotionsListParametersStatusesEnum {
    Published = "Published",
    Withdrawn = "Withdrawn"
}
export declare class GetEarlyDayMotionsListQueryParams extends SpeakeasyBase {
    parametersCurrentStatusDateEnd?: Date;
    parametersCurrentStatusDateStart?: Date;
    parametersEdmIds?: number[];
    parametersIncludeSponsoredByMember?: boolean;
    parametersIsPrayer?: boolean;
    parametersMemberId?: number;
    parametersOrderBy?: GetEarlyDayMotionsListParametersOrderByEnum;
    parametersSearchTerm?: string;
    parametersSkip?: number;
    parametersStatuses?: GetEarlyDayMotionsListParametersStatusesEnum[];
    parametersTabledEndDate?: Date;
    parametersTabledStartDate?: Date;
    parametersTake?: number;
    parametersUInWithAmendmentSuffix?: string;
}
export declare class GetEarlyDayMotionsListRequest extends SpeakeasyBase {
    queryParams: GetEarlyDayMotionsListQueryParams;
}
export declare class GetEarlyDayMotionsListResponse extends SpeakeasyBase {
    apiResponseListPublishedWrittenQuestion?: shared.ApiResponseListPublishedWrittenQuestion;
    apiResponseObject?: shared.ApiResponseObject;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
