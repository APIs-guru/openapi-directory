import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StoresReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class StoresReadRequest extends SpeakeasyBase {
    pathParams: StoresReadPathParams;
}
export declare class StoresReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    storeSingle?: shared.StoreSingle;
}
