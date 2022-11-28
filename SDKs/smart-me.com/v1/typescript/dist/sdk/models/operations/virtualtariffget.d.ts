import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualTariffGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    virtualTariffsOfFolders?: shared.VirtualTariffsOfFolder[];
}
