import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisteredInterest extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdWhen" })
  createdWhen?: Date;

  @Metadata({ data: "json, name=deletedWhen" })
  deletedWhen?: Date;

  @Metadata({ data: "json, name=interest" })
  interest?: string;

  @Metadata({ data: "json, name=lastAmendedWhen" })
  lastAmendedWhen?: Date;
}
