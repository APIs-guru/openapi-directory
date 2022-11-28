import { SpeakeasyBase } from "../../../internal/utils";
export declare class AddOrDeleteRulesQueryParams extends SpeakeasyBase {
    dryRun?: boolean;
}
export declare class AddOrDeleteRulesRequest extends SpeakeasyBase {
    queryParams: AddOrDeleteRulesQueryParams;
    request: any;
}
export declare class AddOrDeleteRulesResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    problem?: any;
    statusCode: number;
    addOrDeleteRules200ApplicationJsonOneOf?: any;
}
