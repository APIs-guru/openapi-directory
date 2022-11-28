import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta1 } from "./meta1";
import { Meta } from "./meta";



export class AnnotationRestApiGetList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changed_by" })
  changedBy?: Meta1;

  @SpeakeasyMetadata({ data: "json, name=changed_on_delta_humanized" })
  changedOnDeltaHumanized?: any;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: Meta;

  @SpeakeasyMetadata({ data: "json, name=end_dttm" })
  endDttm?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=long_descr" })
  longDescr?: string;

  @SpeakeasyMetadata({ data: "json, name=short_descr" })
  shortDescr?: string;

  @SpeakeasyMetadata({ data: "json, name=start_dttm" })
  startDttm?: Date;
}
