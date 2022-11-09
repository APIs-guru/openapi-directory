import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChangeAlertStatusFilterInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoryIds" })
  categoryIds?: string[];

  @Metadata({ data: "json, name=maxDate" })
  maxDate?: Date;

  @Metadata({ data: "json, name=minDate" })
  minDate?: Date;

  @Metadata({ data: "json, name=scope" })
  scope?: number;

  @Metadata({ data: "json, name=teamIds" })
  teamIds?: string[];
}
