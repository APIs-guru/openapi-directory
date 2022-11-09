import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WebLinkForApiContractCategoryEnum {
    Official = "Official"
,    Commercial = "Commercial"
,    Reference = "Reference"
,    Other = "Other"
}


export class WebLinkForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: WebLinkForApiContractCategoryEnum;

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
