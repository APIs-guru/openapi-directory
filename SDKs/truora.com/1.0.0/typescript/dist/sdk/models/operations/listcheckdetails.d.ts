import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCheckDetailsPathParams extends SpeakeasyBase {
    checkId: string;
}
export declare class ListCheckDetailsQueryParams extends SpeakeasyBase {
    lang?: string;
    startKey?: string;
}
export declare class ListCheckDetailsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ListCheckDetailsRequest extends SpeakeasyBase {
    pathParams: ListCheckDetailsPathParams;
    queryParams: ListCheckDetailsQueryParams;
    security: ListCheckDetailsSecurity;
}
export declare class ListCheckDetailsResponse extends SpeakeasyBase {
    checkDetailsOutput?: shared.CheckDetailsOutput;
    contentType: string;
    statusCode: number;
}
