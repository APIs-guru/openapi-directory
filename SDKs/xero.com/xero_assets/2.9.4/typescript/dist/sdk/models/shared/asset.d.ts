import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetStatusEnum } from "./assetstatusenum";
export declare class Asset extends SpeakeasyBase {
    accountingBookValue?: number;
    assetId?: string;
    assetName: string;
    assetNumber?: string;
    assetStatus?: AssetStatusEnum;
    assetTypeId?: string;
    bookDepreciationDetail?: any;
    bookDepreciationSetting?: any;
    canRollback?: boolean;
    disposalDate?: Date;
    disposalPrice?: number;
    isDeleteEnabledForDate?: boolean;
    purchaseDate?: Date;
    purchasePrice?: number;
    serialNumber?: string;
    warrantyExpiryDate?: string;
}
