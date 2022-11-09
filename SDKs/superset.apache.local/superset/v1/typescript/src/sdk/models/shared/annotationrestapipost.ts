import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AnnotationRestApiPost extends SpeakeasyBase {
  @Metadata({ data: "json, name=end_dttm" })
  endDttm?: Date;

  @Metadata({ data: "json, name=json_metadata" })
  jsonMetadata?: string;

  @Metadata({ data: "json, name=long_descr" })
  longDescr?: string;

  @Metadata({ data: "json, name=short_descr" })
  shortDescr?: string;

  @Metadata({ data: "json, name=start_dttm" })
  startDttm?: Date;
}
