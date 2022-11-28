import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetStatusEnum } from "./assetstatusenum";



export class Asset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountingBookValue" })
  accountingBookValue?: number;

  @SpeakeasyMetadata({ data: "json, name=assetId" })
  assetId?: string;

  @SpeakeasyMetadata({ data: "json, name=assetName" })
  assetName: string;

  @SpeakeasyMetadata({ data: "json, name=assetNumber" })
  assetNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=assetStatus" })
  assetStatus?: AssetStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=assetTypeId" })
  assetTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=bookDepreciationDetail" })
  bookDepreciationDetail?: any;

  @SpeakeasyMetadata({ data: "json, name=bookDepreciationSetting" })
  bookDepreciationSetting?: any;

  @SpeakeasyMetadata({ data: "json, name=canRollback" })
  canRollback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disposalDate" })
  disposalDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=disposalPrice" })
  disposalPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=isDeleteEnabledForDate" })
  isDeleteEnabledForDate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=purchaseDate" })
  purchaseDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=purchasePrice" })
  purchasePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=warrantyExpiryDate" })
  warrantyExpiryDate?: string;
}
