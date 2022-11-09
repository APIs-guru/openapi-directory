import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Setting extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetNumberPrefix" })
  assetNumberPrefix?: string;

  @Metadata({ data: "json, name=assetNumberSequence" })
  assetNumberSequence?: string;

  @Metadata({ data: "json, name=assetStartDate" })
  assetStartDate?: Date;

  @Metadata({ data: "json, name=defaultCapitalGainOnDisposalAccountId" })
  defaultCapitalGainOnDisposalAccountId?: string;

  @Metadata({ data: "json, name=defaultGainOnDisposalAccountId" })
  defaultGainOnDisposalAccountId?: string;

  @Metadata({ data: "json, name=defaultLossOnDisposalAccountId" })
  defaultLossOnDisposalAccountId?: string;

  @Metadata({ data: "json, name=lastDepreciationDate" })
  lastDepreciationDate?: Date;

  @Metadata({ data: "json, name=optInForTax" })
  optInForTax?: boolean;
}
