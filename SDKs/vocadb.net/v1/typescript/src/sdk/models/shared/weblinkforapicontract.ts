import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WebLinkForApiContractCategoryEnum {
    Official = "Official",
    Commercial = "Commercial",
    Reference = "Reference",
    Other = "Other"
}


export class WebLinkForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: WebLinkForApiContractCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=descriptionOrUrl" })
  descriptionOrUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
