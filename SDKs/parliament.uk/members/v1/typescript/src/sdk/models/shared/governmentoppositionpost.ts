import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GovernmentDepartment } from "./governmentdepartment";
import { GovernmentOppositionPostHolder } from "./governmentoppositionpostholder";


export class GovernmentOppositionPost extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdWhen" })
  createdWhen?: Date;

  @Metadata({ data: "json, name=governmentDepartments", elemType: shared.GovernmentDepartment })
  governmentDepartments?: GovernmentDepartment[];

  @Metadata({ data: "json, name=hansardName" })
  hansardName?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=order" })
  order?: number;

  @Metadata({ data: "json, name=postHolders", elemType: shared.GovernmentOppositionPostHolder })
  postHolders?: GovernmentOppositionPostHolder[];

  @Metadata({ data: "json, name=type" })
  type?: number;
}
