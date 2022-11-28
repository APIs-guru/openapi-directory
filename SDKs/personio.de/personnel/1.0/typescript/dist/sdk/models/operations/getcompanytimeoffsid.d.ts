import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCompanyTimeOffsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetCompanyTimeOffsIdRequest extends SpeakeasyBase {
    pathParams: GetCompanyTimeOffsIdPathParams;
}
export declare class GetCompanyTimeOffsIdResponse extends SpeakeasyBase {
    absencePeriodResponse?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
