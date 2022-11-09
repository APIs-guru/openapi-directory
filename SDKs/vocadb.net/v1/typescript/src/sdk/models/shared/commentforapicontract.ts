import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserForApiContract } from "./userforapicontract";
import { EntryRefContract } from "./entryrefcontract";


export class CommentForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: UserForApiContract;

  @Metadata({ data: "json, name=authorName" })
  authorName?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=entry" })
  entry?: EntryRefContract;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
