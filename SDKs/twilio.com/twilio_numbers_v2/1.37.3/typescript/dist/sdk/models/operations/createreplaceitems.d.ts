import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateReplaceItemsServerList: readonly ["https://numbers.twilio.com"];
export declare class CreateReplaceItemsPathParams extends SpeakeasyBase {
    bundleSid: string;
}
export declare class CreateReplaceItemsCreateReplaceItemsRequest extends SpeakeasyBase {
    fromBundleSid: string;
}
export declare class CreateReplaceItemsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateReplaceItemsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateReplaceItemsPathParams;
    request?: CreateReplaceItemsCreateReplaceItemsRequest;
    security: CreateReplaceItemsSecurity;
}
export declare class CreateReplaceItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    numbersV2RegulatoryComplianceBundleReplaceItems?: shared.NumbersV2RegulatoryComplianceBundleReplaceItems;
}
