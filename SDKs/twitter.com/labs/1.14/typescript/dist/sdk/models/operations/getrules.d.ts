import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRulesQueryParams extends SpeakeasyBase {
    ids?: string[];
}
export declare class GetRulesRequest extends SpeakeasyBase {
    queryParams: GetRulesQueryParams;
}
export declare class GetRulesResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    getRulesResponse?: shared.GetRulesResponse;
    problem?: any;
    statusCode: number;
}
