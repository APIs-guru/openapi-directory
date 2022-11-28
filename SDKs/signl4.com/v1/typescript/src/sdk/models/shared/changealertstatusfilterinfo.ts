import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChangeAlertStatusFilterInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryIds" })
  categoryIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=maxDate" })
  maxDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=minDate" })
  minDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: number;

  @SpeakeasyMetadata({ data: "json, name=teamIds" })
  teamIds?: string[];
}
