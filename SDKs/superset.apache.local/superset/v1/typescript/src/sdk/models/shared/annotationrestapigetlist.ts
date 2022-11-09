import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta1 } from "./meta1";
import { Meta } from "./meta";


export class AnnotationRestApiGetList extends SpeakeasyBase {
  @Metadata({ data: "json, name=changed_by" })
  changedBy?: Meta1;

  @Metadata({ data: "json, name=changed_on_delta_humanized" })
  changedOnDeltaHumanized?: any;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: Meta;

  @Metadata({ data: "json, name=end_dttm" })
  endDttm?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=long_descr" })
  longDescr?: string;

  @Metadata({ data: "json, name=short_descr" })
  shortDescr?: string;

  @Metadata({ data: "json, name=start_dttm" })
  startDttm?: Date;
}
