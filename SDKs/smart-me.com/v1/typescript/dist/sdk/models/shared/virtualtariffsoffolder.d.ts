import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualTariff } from "./virtualtariff";
/**
 * Container class for a Virtual Tariff
**/
export declare class VirtualTariffsOfFolder extends SpeakeasyBase {
    date?: Date;
    folderId?: string;
    name?: string;
    virtualTariffs?: VirtualTariff[];
}
