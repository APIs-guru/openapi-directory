import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GroupedQuestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateTabled" })
  dateTabled?: Date;

  @SpeakeasyMetadata({ data: "json, name=questionUin" })
  questionUin?: string;
}
