import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssetType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accumulatedDepreciationAccountId" })
  accumulatedDepreciationAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=assetTypeId" })
  assetTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=assetTypeName" })
  assetTypeName: string;

  @SpeakeasyMetadata({ data: "json, name=bookDepreciationSetting" })
  bookDepreciationSetting: any;

  @SpeakeasyMetadata({ data: "json, name=depreciationExpenseAccountId" })
  depreciationExpenseAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=fixedAssetAccountId" })
  fixedAssetAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=locks" })
  locks?: number;
}
