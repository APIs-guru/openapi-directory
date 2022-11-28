import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserMessageContract } from "./usermessagecontract";



export class PartialFindResultUserMessageContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: UserMessageContract })
  items?: UserMessageContract[];

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
