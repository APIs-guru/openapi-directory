import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GovernmentDepartment } from "./governmentdepartment";
import { GovernmentOppositionPostHolder } from "./governmentoppositionpostholder";



export class GovernmentOppositionPost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdWhen" })
  createdWhen?: Date;

  @SpeakeasyMetadata({ data: "json, name=governmentDepartments", elemType: GovernmentDepartment })
  governmentDepartments?: GovernmentDepartment[];

  @SpeakeasyMetadata({ data: "json, name=hansardName" })
  hansardName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;

  @SpeakeasyMetadata({ data: "json, name=postHolders", elemType: GovernmentOppositionPostHolder })
  postHolders?: GovernmentOppositionPostHolder[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}
