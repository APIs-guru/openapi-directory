import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SongApiPostRatingPathParams extends SpeakeasyBase {
    id: number;
}
export declare class SongApiPostRatingRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    songRatingContract?: shared.SongRatingContract;
    songRatingContract1?: shared.SongRatingContract;
    songRatingContract2?: shared.SongRatingContract;
    textXml: Uint8Array;
}
export declare class SongApiPostRatingRequest extends SpeakeasyBase {
    pathParams: SongApiPostRatingPathParams;
    request: SongApiPostRatingRequests;
}
export declare class SongApiPostRatingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
