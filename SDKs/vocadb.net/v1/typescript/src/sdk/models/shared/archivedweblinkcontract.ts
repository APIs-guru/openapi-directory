import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ArchivedWebLinkContractCategoryEnum {
    Official = "Official"
,    Commercial = "Commercial"
,    Reference = "Reference"
,    Other = "Other"
}


export class ArchivedWebLinkContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: ArchivedWebLinkContractCategoryEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
