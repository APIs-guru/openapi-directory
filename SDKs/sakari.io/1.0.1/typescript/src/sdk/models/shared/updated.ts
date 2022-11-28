import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatedBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;
}


export class Updated extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=at" })
  at?: Date;

  @SpeakeasyMetadata({ data: "json, name=by" })
  by?: UpdatedBy;
}
