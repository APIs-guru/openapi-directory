import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserForApiContract } from "./userforapicontract";


export class PartialFindResultUserForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.UserForApiContract })
  items?: UserForApiContract[];

  @Metadata({ data: "json, name=term" })
  term?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
