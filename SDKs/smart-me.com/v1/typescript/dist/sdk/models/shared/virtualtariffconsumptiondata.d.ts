import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VirtualTariffConsumptionDataTariffTypeEnum {
    Battery = "Battery",
    Solar = "Solar",
    Normal = "Normal"
}
/**
 * Container class for the virtual tariff consumption
**/
export declare class VirtualTariffConsumptionData extends SpeakeasyBase {
    consumption?: number;
    currency?: string;
    name?: string;
    price?: number;
    tariffType?: VirtualTariffConsumptionDataTariffTypeEnum;
}
