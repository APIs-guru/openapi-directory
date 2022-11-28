import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersIdAccountsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum PostUsersIdAccountsRequestBodyTypeEnum {
    Bank = "bank",
    Credits = "credits",
    Loans = "loans",
    Mortgage = "mortgage",
    Stocks = "stocks",
    Vehicle = "vehicle",
    Property = "property",
    OtherAsset = "other_asset",
    OtherLiability = "other_liability"
}
export declare class PostUsersIdAccountsRequestBody extends SpeakeasyBase {
    currencyCode: string;
    institutionId: number;
    title: string;
    type: PostUsersIdAccountsRequestBodyTypeEnum;
}
export declare class PostUsersIdAccountsRequest extends SpeakeasyBase {
    pathParams: PostUsersIdAccountsPathParams;
    request?: PostUsersIdAccountsRequestBody;
}
export declare class PostUsersIdAccountsResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
