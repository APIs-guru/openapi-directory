import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiLocationConstituencyIdGeometryPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiLocationConstituencyIdGeometryRequest extends SpeakeasyBase {
    pathParams: GetApiLocationConstituencyIdGeometryPathParams;
}
export declare class GetApiLocationConstituencyIdGeometryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    stringItem?: shared.StringItem;
}
