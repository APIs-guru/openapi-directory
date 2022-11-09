import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserMessageContract } from "./usermessagecontract";


export class PartialFindResultUserMessageContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.UserMessageContract })
  items?: UserMessageContract[];

  @Metadata({ data: "json, name=term" })
  term?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
