import { SpeakeasyBase } from "../../../internal/utils";
export declare class EmulationOutputRequest extends SpeakeasyBase {
    request: any;
}
export declare class EmulationOutputResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
