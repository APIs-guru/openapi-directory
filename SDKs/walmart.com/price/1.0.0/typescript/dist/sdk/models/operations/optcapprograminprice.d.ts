import { SpeakeasyBase } from "../../../internal/utils";
export declare class OptCapProgramInPriceHeaders extends SpeakeasyBase {
    authorization: string;
    wmConsumerChannelType?: string;
    wmQosCorrelationId: string;
    wmSecAccessToken: string;
    wmSvcName: string;
}
export declare class OptCapProgramInPriceRequestBody extends SpeakeasyBase {
    subsidyEnrolled?: boolean;
    subsidyPreference?: boolean;
}
export declare class OptCapProgramInPrice200ApplicationJsonStatusInfo extends SpeakeasyBase {
    subsidyEnrolled?: boolean;
    subsidyPreference?: boolean;
}
export declare class OptCapProgramInPrice200ApplicationJson extends SpeakeasyBase {
    martId?: string;
    statusInfo?: OptCapProgramInPrice200ApplicationJsonStatusInfo;
}
export declare class OptCapProgramInPriceRequest extends SpeakeasyBase {
    headers: OptCapProgramInPriceHeaders;
    request: OptCapProgramInPriceRequestBody;
}
export declare class OptCapProgramInPriceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    optCapProgramInPrice200ApplicationJsonObject?: OptCapProgramInPrice200ApplicationJson;
}
