import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateScoreConfigRequest extends SpeakeasyBase {
    request: shared.CreateConfigInput;
}
export declare class CreateScoreConfigResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    scoreConfigOutput?: shared.ScoreConfigOutput;
    statusCode: number;
}
