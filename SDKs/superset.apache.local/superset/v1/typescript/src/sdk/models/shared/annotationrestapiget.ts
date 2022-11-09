import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta2 } from "./meta2";


export class AnnotationRestApiGet extends SpeakeasyBase {
  @Metadata({ data: "json, name=end_dttm" })
  endDttm?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=json_metadata" })
  jsonMetadata?: string;

  @Metadata({ data: "json, name=layer" })
  layer: Meta2;

  @Metadata({ data: "json, name=long_descr" })
  longDescr?: string;

  @Metadata({ data: "json, name=short_descr" })
  shortDescr?: string;

  @Metadata({ data: "json, name=start_dttm" })
  startDttm?: Date;
}
