import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApplyNodePathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class ApplyNodeRequest extends SpeakeasyBase {
    pathParams: ApplyNodePathParams;
}
export declare class ApplyNodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    applyNode200TextPlainString?: string;
}
