import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TwitterHandleEnum {
    AtATwitterHandle = "@a Twitter handle"
}


// Twitter
/** 
 * Twitter data
**/
export class Twitter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=handle" })
  handle?: TwitterHandleEnum;

  @SpeakeasyMetadata({ data: "json, name=hashtags" })
  hashtags?: string[];
}
