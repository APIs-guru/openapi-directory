import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListScoreConfigsQueryParams extends SpeakeasyBase {
    startKey?: string;
}
export declare class ListScoreConfigsRequest extends SpeakeasyBase {
    queryParams: ListScoreConfigsQueryParams;
}
export declare class ListScoreConfigsResponse extends SpeakeasyBase {
    contentType: string;
    scoreConfigsOutput?: shared.ScoreConfigsOutput;
    statusCode: number;
}
