import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta2 } from "./meta2";



export class AnnotationRestApiGet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_dttm" })
  endDttm?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=json_metadata" })
  jsonMetadata?: string;

  @SpeakeasyMetadata({ data: "json, name=layer" })
  layer: Meta2;

  @SpeakeasyMetadata({ data: "json, name=long_descr" })
  longDescr?: string;

  @SpeakeasyMetadata({ data: "json, name=short_descr" })
  shortDescr?: string;

  @SpeakeasyMetadata({ data: "json, name=start_dttm" })
  startDttm?: Date;
}
