import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CommentaryCommentaryEmployee
/** 
 * The commentarys' employee
**/
export class CommentaryCommentaryEmployee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}


// CommentaryCommentaryPayRun
/** 
 * The commentarys' pay run
**/
export class CommentaryCommentaryPayRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}


export class CommentaryCommentary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=Detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=Employee" })
  employee?: CommentaryCommentaryEmployee;

  @SpeakeasyMetadata({ data: "json, name=PayRun" })
  payRun?: CommentaryCommentaryPayRun;
}


export class Commentary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Commentary" })
  commentary?: CommentaryCommentary;
}
