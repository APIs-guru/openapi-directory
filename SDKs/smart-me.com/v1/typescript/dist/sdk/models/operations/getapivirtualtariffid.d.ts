import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiVirtualTariffIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetApiVirtualTariffIdRequest extends SpeakeasyBase {
    pathParams: GetApiVirtualTariffIdPathParams;
}
export declare class GetApiVirtualTariffIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    virtualTariffsOfFolder?: shared.VirtualTariffsOfFolder;
}
