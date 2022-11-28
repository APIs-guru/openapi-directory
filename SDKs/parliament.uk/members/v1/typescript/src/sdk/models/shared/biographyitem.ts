import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BiographyItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalInfo" })
  additionalInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalInfoLink" })
  additionalInfoLink?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=house" })
  house?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;
}
