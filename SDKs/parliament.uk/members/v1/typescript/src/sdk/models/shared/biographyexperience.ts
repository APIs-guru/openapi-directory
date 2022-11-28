import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BiographyExperience extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endMonth" })
  endMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=endYear" })
  endYear?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=organisation" })
  organisation?: string;

  @SpeakeasyMetadata({ data: "json, name=startMonth" })
  startMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=startYear" })
  startYear?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=typeId" })
  typeId?: number;
}
