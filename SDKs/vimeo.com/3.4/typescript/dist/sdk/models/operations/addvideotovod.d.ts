import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoToVodPathParams extends SpeakeasyBase {
    ondemandId: number;
    videoId: number;
}
export declare class AddVideoToVodRequestBodyBuyPrice extends SpeakeasyBase {
    aud?: number;
    cad?: number;
    chf?: number;
    dkk?: number;
    eur?: number;
    gbp?: number;
    jpy?: number;
    krw?: number;
    nok?: number;
    pln?: number;
    sek?: number;
    usd?: number;
}
export declare class AddVideoToVodRequestBodyBuy extends SpeakeasyBase {
    price?: AddVideoToVodRequestBodyBuyPrice;
}
export declare class AddVideoToVodRequestBodyRentPrice extends SpeakeasyBase {
    aud?: number;
    cad?: number;
    chf?: number;
    dkk?: number;
    eur?: number;
    gbp?: number;
    jpy?: number;
    krw?: number;
    nok?: number;
    pln?: number;
    sek?: number;
    usd?: number;
}
export declare class AddVideoToVodRequestBodyRent extends SpeakeasyBase {
    price?: AddVideoToVodRequestBodyRentPrice;
}
export declare enum AddVideoToVodRequestBodyTypeEnum {
    Extra = "extra",
    Main = "main",
    Trailer = "trailer"
}
export declare class AddVideoToVodRequestBody extends SpeakeasyBase {
    buy?: AddVideoToVodRequestBodyBuy;
    position?: number;
    releaseYear?: number;
    rent?: AddVideoToVodRequestBodyRent;
    type: AddVideoToVodRequestBodyTypeEnum;
}
export declare class AddVideoToVodSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVideoToVodRequest extends SpeakeasyBase {
    pathParams: AddVideoToVodPathParams;
    request: AddVideoToVodRequestBody;
    security: AddVideoToVodSecurity;
}
export declare class AddVideoToVodResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandVideo?: shared.OnDemandVideo;
}
