import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetStatusEnum } from "./assetstatusenum";


export class Asset extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountingBookValue" })
  accountingBookValue?: number;

  @Metadata({ data: "json, name=assetId" })
  assetId?: string;

  @Metadata({ data: "json, name=assetName" })
  assetName: string;

  @Metadata({ data: "json, name=assetNumber" })
  assetNumber?: string;

  @Metadata({ data: "json, name=assetStatus" })
  assetStatus?: AssetStatusEnum;

  @Metadata({ data: "json, name=assetTypeId" })
  assetTypeId?: string;

  @Metadata({ data: "json, name=bookDepreciationDetail" })
  bookDepreciationDetail?: any;

  @Metadata({ data: "json, name=bookDepreciationSetting" })
  bookDepreciationSetting?: any;

  @Metadata({ data: "json, name=canRollback" })
  canRollback?: boolean;

  @Metadata({ data: "json, name=disposalDate" })
  disposalDate?: Date;

  @Metadata({ data: "json, name=disposalPrice" })
  disposalPrice?: number;

  @Metadata({ data: "json, name=isDeleteEnabledForDate" })
  isDeleteEnabledForDate?: boolean;

  @Metadata({ data: "json, name=purchaseDate" })
  purchaseDate?: Date;

  @Metadata({ data: "json, name=purchasePrice" })
  purchasePrice?: number;

  @Metadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @Metadata({ data: "json, name=warrantyExpiryDate" })
  warrantyExpiryDate?: string;
}
