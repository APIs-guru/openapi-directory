import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AnnotationRestApiPost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_dttm" })
  endDttm?: Date;

  @SpeakeasyMetadata({ data: "json, name=json_metadata" })
  jsonMetadata?: string;

  @SpeakeasyMetadata({ data: "json, name=long_descr" })
  longDescr?: string;

  @SpeakeasyMetadata({ data: "json, name=short_descr" })
  shortDescr?: string;

  @SpeakeasyMetadata({ data: "json, name=start_dttm" })
  startDttm?: Date;
}
