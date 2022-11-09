import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WebLinkContractCategoryEnum {
    Official = "Official"
,    Commercial = "Commercial"
,    Reference = "Reference"
,    Other = "Other"
}


export class WebLinkContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: WebLinkContractCategoryEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=descriptionOrUrl" })
  descriptionOrUrl?: string;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
