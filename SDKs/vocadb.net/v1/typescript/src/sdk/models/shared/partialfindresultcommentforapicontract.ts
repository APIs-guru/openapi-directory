import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommentForApiContract } from "./commentforapicontract";



export class PartialFindResultCommentForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: CommentForApiContract })
  items?: CommentForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
