import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetScrabbleScorePathParams extends SpeakeasyBase {
    word: string;
}
export declare class GetScrabbleScoreRequest extends SpeakeasyBase {
    pathParams: GetScrabbleScorePathParams;
}
export declare class GetScrabbleScoreResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
