import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserForApiContract } from "./userforapicontract";
import { CommentForApiContract } from "./commentforapicontract";
import { CommentForApiContract } from "./commentforapicontract";


export class DiscussionTopicContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: UserForApiContract;

  @Metadata({ data: "json, name=commentCount" })
  commentCount?: number;

  @Metadata({ data: "json, name=comments", elemType: shared.CommentForApiContract })
  comments?: CommentForApiContract[];

  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=folderId" })
  folderId?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=lastComment" })
  lastComment?: CommentForApiContract;

  @Metadata({ data: "json, name=locked" })
  locked?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
