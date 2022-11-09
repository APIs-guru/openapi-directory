import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BiographyItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalInfo" })
  additionalInfo?: string;

  @Metadata({ data: "json, name=additionalInfoLink" })
  additionalInfoLink?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=house" })
  house?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;
}
