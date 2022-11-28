import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApplicationChargeRequestBodyApplicationCharge extends SpeakeasyBase {
    applicationChargeSourceId?: string;
}
export declare class PostApplicationChargeRequestBody extends SpeakeasyBase {
    applicationCharge?: PostApplicationChargeRequestBodyApplicationCharge;
}
export declare class PostApplicationChargeSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PostApplicationCharge201ApplicationJsonApplicationCharge extends SpeakeasyBase {
    id?: string;
    makeDate?: number;
    point?: number;
    updateDate?: number;
}
export declare class PostApplicationCharge201ApplicationJson extends SpeakeasyBase {
    applicationCharge?: PostApplicationCharge201ApplicationJsonApplicationCharge;
}
export declare class PostApplicationChargeRequest extends SpeakeasyBase {
    request: PostApplicationChargeRequestBody;
    security: PostApplicationChargeSecurity;
}
export declare class PostApplicationChargeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postApplicationCharge201ApplicationJsonObject?: PostApplicationCharge201ApplicationJson;
}
