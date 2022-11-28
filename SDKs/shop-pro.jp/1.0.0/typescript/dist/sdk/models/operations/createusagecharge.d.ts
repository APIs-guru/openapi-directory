import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateUsageChargePathParams extends SpeakeasyBase {
    recurringApplicationChargeId: string;
}
export declare class CreateUsageChargeHeaders extends SpeakeasyBase {
    xAppstoreUsageChargeToken?: string;
}
export declare class CreateUsageChargeRequestBodyUsageCharge extends SpeakeasyBase {
    description: string;
    point: number;
}
export declare class CreateUsageChargeRequestBody extends SpeakeasyBase {
    usageCharge?: CreateUsageChargeRequestBodyUsageCharge;
}
export declare class CreateUsageChargeSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreateUsageCharge201ApplicationJsonUsageCharge extends SpeakeasyBase {
    description?: string;
    id?: string;
    makeDate?: number;
    point?: number;
    updateDate?: number;
}
export declare class CreateUsageCharge201ApplicationJson extends SpeakeasyBase {
    usageCharge?: CreateUsageCharge201ApplicationJsonUsageCharge;
}
export declare class CreateUsageChargeRequest extends SpeakeasyBase {
    pathParams: CreateUsageChargePathParams;
    headers: CreateUsageChargeHeaders;
    request: CreateUsageChargeRequestBody;
    security: CreateUsageChargeSecurity;
}
export declare class CreateUsageChargeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createUsageCharge201ApplicationJsonObject?: CreateUsageCharge201ApplicationJson;
}
