import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisteredInterest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdWhen" })
  createdWhen?: Date;

  @SpeakeasyMetadata({ data: "json, name=deletedWhen" })
  deletedWhen?: Date;

  @SpeakeasyMetadata({ data: "json, name=interest" })
  interest?: string;

  @SpeakeasyMetadata({ data: "json, name=lastAmendedWhen" })
  lastAmendedWhen?: Date;
}
