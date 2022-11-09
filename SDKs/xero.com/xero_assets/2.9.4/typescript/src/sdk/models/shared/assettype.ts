import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssetType extends SpeakeasyBase {
  @Metadata({ data: "json, name=accumulatedDepreciationAccountId" })
  accumulatedDepreciationAccountId?: string;

  @Metadata({ data: "json, name=assetTypeId" })
  assetTypeId?: string;

  @Metadata({ data: "json, name=assetTypeName" })
  assetTypeName: string;

  @Metadata({ data: "json, name=bookDepreciationSetting" })
  bookDepreciationSetting: any;

  @Metadata({ data: "json, name=depreciationExpenseAccountId" })
  depreciationExpenseAccountId?: string;

  @Metadata({ data: "json, name=fixedAssetAccountId" })
  fixedAssetAccountId?: string;

  @Metadata({ data: "json, name=locks" })
  locks?: number;
}
