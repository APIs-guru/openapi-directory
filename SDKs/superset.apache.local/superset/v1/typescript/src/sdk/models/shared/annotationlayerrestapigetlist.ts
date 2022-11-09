import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta4 } from "./meta4";
import { Meta3 } from "./meta3";


export class AnnotationLayerRestApiGetList extends SpeakeasyBase {
  @Metadata({ data: "json, name=changed_by" })
  changedBy?: Meta4;

  @Metadata({ data: "json, name=changed_on" })
  changedOn?: Date;

  @Metadata({ data: "json, name=changed_on_delta_humanized" })
  changedOnDeltaHumanized?: any;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: Meta3;

  @Metadata({ data: "json, name=created_on" })
  createdOn?: Date;

  @Metadata({ data: "json, name=descr" })
  descr?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
