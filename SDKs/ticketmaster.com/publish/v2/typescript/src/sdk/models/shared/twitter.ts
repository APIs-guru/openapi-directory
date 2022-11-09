import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TwitterHandleEnum {
    AtATwitterHandle = "@a Twitter handle"
}


// Twitter
/** 
 * Twitter data
**/
export class Twitter extends SpeakeasyBase {
  @Metadata({ data: "json, name=handle" })
  handle?: TwitterHandleEnum;

  @Metadata({ data: "json, name=hashtags" })
  hashtags?: string[];
}
