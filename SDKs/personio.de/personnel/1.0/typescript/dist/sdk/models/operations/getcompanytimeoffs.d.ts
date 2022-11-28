import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCompanyTimeOffsQueryParams extends SpeakeasyBase {
    employees?: number[];
    endDate?: Date;
    limit?: number;
    offset?: number;
    startDate?: Date;
    updatedFrom?: string;
    updatedTo?: string;
}
export declare class GetCompanyTimeOffsRequest extends SpeakeasyBase {
    queryParams: GetCompanyTimeOffsQueryParams;
}
export declare class GetCompanyTimeOffsResponse extends SpeakeasyBase {
    absencePeriodsResponse?: shared.AbsencePeriodsResponse;
    contentType: string;
    statusCode: number;
}
