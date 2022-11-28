import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class QueryBatchStatusV3PathParams extends SpeakeasyBase {
    batchId: string;
}
export declare class QueryBatchStatusV3Request extends SpeakeasyBase {
    pathParams: QueryBatchStatusV3PathParams;
}
export declare class QueryBatchStatusV3Response extends SpeakeasyBase {
    contentType: string;
    queryBatchResponse?: shared.QueryBatchResponse;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
