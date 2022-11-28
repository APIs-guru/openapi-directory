import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Setting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetNumberPrefix" })
  assetNumberPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=assetNumberSequence" })
  assetNumberSequence?: string;

  @SpeakeasyMetadata({ data: "json, name=assetStartDate" })
  assetStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=defaultCapitalGainOnDisposalAccountId" })
  defaultCapitalGainOnDisposalAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultGainOnDisposalAccountId" })
  defaultGainOnDisposalAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultLossOnDisposalAccountId" })
  defaultLossOnDisposalAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastDepreciationDate" })
  lastDepreciationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=optInForTax" })
  optInForTax?: boolean;
}
