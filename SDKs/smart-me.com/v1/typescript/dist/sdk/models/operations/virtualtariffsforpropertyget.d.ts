import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualTariffsForPropertyGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class VirtualTariffsForPropertyGetRequest extends SpeakeasyBase {
    pathParams: VirtualTariffsForPropertyGetPathParams;
}
export declare class VirtualTariffsForPropertyGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    virtualTariffsOfFolders?: shared.VirtualTariffsOfFolder[];
}
