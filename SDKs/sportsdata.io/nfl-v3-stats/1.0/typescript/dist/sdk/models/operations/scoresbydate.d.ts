import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ScoresByDatePathParams extends SpeakeasyBase {
    date: string;
    format: string;
}
export declare class ScoresByDateRequest extends SpeakeasyBase {
    pathParams: ScoresByDatePathParams;
}
export declare class ScoresByDateResponse extends SpeakeasyBase {
    contentType: string;
    scores?: any[];
    statusCode: number;
}
