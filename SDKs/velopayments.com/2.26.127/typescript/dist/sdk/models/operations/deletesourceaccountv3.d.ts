import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSourceAccountV3PathParams extends SpeakeasyBase {
    sourceAccountId: string;
}
export declare class DeleteSourceAccountV3Request extends SpeakeasyBase {
    pathParams: DeleteSourceAccountV3PathParams;
}
export declare class DeleteSourceAccountV3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
    inlineResponse409?: any;
}
