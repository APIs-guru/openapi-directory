import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VirtualTariffTypeEnum {
    Battery = "Battery",
    Solar = "Solar",
    Normal = "Normal"
}
/**
 * Container class for the virtual tariffs
**/
export declare class VirtualTariff extends SpeakeasyBase {
    factor?: number;
    id?: string;
    name?: string;
    type?: VirtualTariffTypeEnum;
    unit?: string;
    value?: number;
}
