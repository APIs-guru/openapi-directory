import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ArchivedWebLinkContractCategoryEnum {
    Official = "Official",
    Commercial = "Commercial",
    Reference = "Reference",
    Other = "Other"
}


export class ArchivedWebLinkContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: ArchivedWebLinkContractCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
