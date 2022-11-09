import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdatedBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;
}


export class Updated extends SpeakeasyBase {
  @Metadata({ data: "json, name=at" })
  at?: Date;

  @Metadata({ data: "json, name=by" })
  by?: UpdatedBy;
}
