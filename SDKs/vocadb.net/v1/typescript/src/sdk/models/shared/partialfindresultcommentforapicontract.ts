import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CommentForApiContract } from "./commentforapicontract";


export class PartialFindResultCommentForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.CommentForApiContract })
  items?: CommentForApiContract[];

  @Metadata({ data: "json, name=term" })
  term?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
