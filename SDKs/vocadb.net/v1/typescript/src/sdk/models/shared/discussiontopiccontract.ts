import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserForApiContract } from "./userforapicontract";
import { CommentForApiContract } from "./commentforapicontract";



export class DiscussionTopicContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: UserForApiContract;

  @SpeakeasyMetadata({ data: "json, name=commentCount" })
  commentCount?: number;

  @SpeakeasyMetadata({ data: "json, name=comments", elemType: CommentForApiContract })
  comments?: CommentForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=folderId" })
  folderId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lastComment" })
  lastComment?: CommentForApiContract;

  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
