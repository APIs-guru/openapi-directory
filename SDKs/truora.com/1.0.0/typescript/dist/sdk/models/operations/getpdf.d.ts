import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPdfPathParams extends SpeakeasyBase {
    checkId: string;
}
export declare class GetPdfQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GetPdfRequest extends SpeakeasyBase {
    pathParams: GetPdfPathParams;
    queryParams: GetPdfQueryParams;
}
export declare class GetPdfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
