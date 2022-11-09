import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CommentaryCommentaryEmployee
/** 
 * The commentarys' employee
**/
export class CommentaryCommentaryEmployee extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}


// CommentaryCommentaryPayRun
/** 
 * The commentarys' pay run
**/
export class CommentaryCommentaryPayRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}


export class CommentaryCommentary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Created" })
  created?: Date;

  @Metadata({ data: "json, name=Detail" })
  detail?: string;

  @Metadata({ data: "json, name=Employee" })
  employee?: CommentaryCommentaryEmployee;

  @Metadata({ data: "json, name=PayRun" })
  payRun?: CommentaryCommentaryPayRun;
}


export class Commentary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Commentary" })
  commentary?: CommentaryCommentary;
}
