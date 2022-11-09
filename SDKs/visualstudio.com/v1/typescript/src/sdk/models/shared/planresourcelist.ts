import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlanResource } from "./planresource";


export class PlanResourceList extends SpeakeasyBase {
  @Metadata({ data: "json, name=value", elemType: shared.PlanResource })
  value?: PlanResource[];
}
