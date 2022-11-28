import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class QueryBatchStatusV4PathParams extends SpeakeasyBase {
    batchId: string;
}
export declare class QueryBatchStatusV4Request extends SpeakeasyBase {
    pathParams: QueryBatchStatusV4PathParams;
}
export declare class QueryBatchStatusV4Response extends SpeakeasyBase {
    contentType: string;
    queryBatchResponse2?: shared.QueryBatchResponse2;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
