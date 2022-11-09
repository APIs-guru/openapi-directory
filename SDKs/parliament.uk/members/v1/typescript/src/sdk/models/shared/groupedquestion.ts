import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GroupedQuestion extends SpeakeasyBase {
  @Metadata({ data: "json, name=dateTabled" })
  dateTabled?: Date;

  @Metadata({ data: "json, name=questionUin" })
  questionUin?: string;
}
